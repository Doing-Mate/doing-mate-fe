import { CategoryModalLayout } from "./Layout";
import { CategoryModalHeader } from "./Header";
import { CategoryModalFooter } from "./Footer";
import { CategoryListMain } from "./Main/CategoryListMain";
import { CategoryItemMain } from "./Main/CategoryItemMain";
import { CategoryAlertDialog } from "../../AlertDialog/CategoryDeleteAlertDialog";
import { ModalProps } from "../../../context/modalPageComponents";
import { ChangeModalComponent } from "../../ChangeModalComponent";
import { CRUDButtonList } from "../../Button/CRUDButtonList";
import { CategoryDataProps } from "../../../context/dataInterface";

interface ModalDataProps {
  mode: ModalProps;
}

export const BasicCategoryModal = ({ mode }: ModalDataProps) => {
  const footerData = ChangeModalComponent({
    propsType: mode.propsType,
  });

  mode.footerButtons =
    mode.propsType === "item"
      ? CRUDButtonList({
          footerData: footerData,
        })
      : [];

  return (
    <CategoryModalLayout
      header={<CategoryModalHeader text={mode.headerText} />}
      footer={<CategoryModalFooter children={mode.footerButtons} />}
    >
      {mode.propsType === "item" ? (
        <CategoryItemMain data={mode.data as CategoryDataProps} />
      ) : (
        <>
          <CategoryListMain
            data={mode.data as CategoryDataProps[]}
            onClickData={footerData}
          />
          {mode.alert && (
            <CategoryAlertDialog
              Open={mode.alert}
              movePage={footerData[1].backClick!}
            />
          )}
        </>
      )}
    </CategoryModalLayout>
  );
};
