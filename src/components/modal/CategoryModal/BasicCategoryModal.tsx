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
import { useInputCategoryData } from "../../../hooks/useInputCategoryData";
import { useEffect, useState } from "react";
import { useCategoryDataContext } from "../../../hooks/useCategoryDataContext";

interface ModalDataProps {
  mode: ModalProps;
}

export const BasicCategoryModal = ({ mode }: ModalDataProps) => {
  const { inputData, setInputData, handleTitleChange, handleColorChange } =
    useInputCategoryData();
  const { categoryList } = useCategoryDataContext();

  const [itemData, setItemData] = useState<CategoryDataProps | undefined>();
  const [listData, setListData] = useState<CategoryDataProps[] | undefined>();

  useEffect(() => {
    if (mode.propsType === "item") {
      const data = mode.data as CategoryDataProps;
      const newData = categoryList.find(
        (categoryItem) => categoryItem.id === data?.id
      );
      newData !== undefined && setInputData(newData);
      setItemData(newData);
    } else {
      setListData(categoryList.filter((item) => item.id !== "cg_00"));
      const newData = { id: "", color: "", title: "" };
      mode.data !== undefined && mode.alert === true
        ? setInputData(mode.data as CategoryDataProps)
        : (setInputData(newData), setItemData(newData));
    }
  }, [mode]);

  const footerData = ChangeModalComponent({
    propsType: mode.propsType,
    inputData: inputData,
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
        <CategoryItemMain
          data={itemData as CategoryDataProps}
          handleTitleChange={handleTitleChange}
          handleColorChange={handleColorChange}
        />
      ) : (
        <>
          <CategoryListMain
            data={listData as CategoryDataProps[]}
            onClickData={footerData}
          />
          {mode.alert && (
            <CategoryAlertDialog
              Open={mode.alert}
              okClick={footerData[1].OKClick!}
              backClick={footerData[1].backClick!}
            />
          )}
        </>
      )}
    </CategoryModalLayout>
  );
};
