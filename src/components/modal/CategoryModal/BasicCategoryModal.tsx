import { CategoryModalLayout } from "./Layout";
import { CategoryModalHeader } from "./Header";
import { CategoryModalFooter } from "./Footer";
import { CategoryListMain } from "./Main/CategoryListMain";
import { CategoryItemMain } from "./Main/CategoryItemMain";
import { CategoryAlertDialog } from "../../AlertDialog/CategoryDeleteAlertDialog";
import { ModalProps } from "../../../context/modalPageComponents";
import { ChangeModalComponent } from "../../ChangeModalComponent";
import { CRUDButton } from "../../Button/CRUDButton";
import theme from "../../../styles/theme";

interface ModalDataProps {
  mode: ModalProps;
}

export const BasicCategoryModal = ({ mode }: ModalDataProps) => {
  const footerData = ChangeModalComponent({ propsType: mode.propsType });
  mode.footerButtons =
    mode.propsType === "item"
      ? [
          <CRUDButton
            key="footerBtn_01"
            text={footerData[0].text}
            colorType={theme.colors.secondary}
            hoverColorType={"#e498ac"}
            onClick={footerData[0].onClick}
          />,
          <CRUDButton
            key="footerBtn_02"
            text={footerData[1].text}
            colorType={theme.colors.primary}
            hoverColorType={"#92b5ec"}
            onClick={footerData[1].onClick}
          />,
        ]
      : [];

  return (
    <CategoryModalLayout
      header={<CategoryModalHeader text={mode.headerText} />}
      footer={<CategoryModalFooter children={mode.footerButtons} />}
    >
      {mode.propsType === "item" ? (
        <CategoryItemMain />
      ) : (
        <>
          <CategoryListMain onClickData={footerData} />
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
