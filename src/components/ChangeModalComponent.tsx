import { useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";
import { useModalModeContext } from "../hooks/useModalModeContext";
import { ModalPropsType } from "../context/modalPageComponents";

interface footerDataProps {
  text: string;
  onClick: () => void;
  backClick?: () => void;
}

export const ChangeModalComponent = ({
  propsType,
}: ModalPropsType): footerDataProps[] => {
  const { modalMode, setModalMode } = useModalModeContext();
  const [newMode, dispatch] = useReducer(reducer, modalMode);

  interface PageTypeProps {
    pageType:
      | "detail"
      | "modify"
      | "add"
      | "delete"
      | "list"
      | "item"
      | "categoryDelete";
  }
  const moveModal = ({ pageType }: PageTypeProps) => {
    PageType[pageType]();
  };

  const PageType = {
    detail: () => dispatch({ type: "Detail" }),
    modify: () => dispatch({ type: "Modify" }),
    add: () => dispatch({ type: "Add" }),
    delete: () => dispatch({ type: "Delete" }),
    list: () => dispatch({ type: "List" }),
    item: () => dispatch({ type: "Item" }),
    categoryDelete: () => dispatch({ type: "CategoryDelete" }),
  };

  useEffect(() => {
    setModalMode(newMode);
    console.log(newMode.propsType);
  }, [newMode]);

  switch (propsType) {
    case "detail":
      return [
        {
          text: "삭제",
          onClick: () => moveModal({ pageType: "delete" }),
          backClick: () => moveModal({ pageType: "detail" }),
        },
        { text: "수정", onClick: () => moveModal({ pageType: "modify" }) },
      ];
    case "modify":
      return [
        {
          text: "취소",
          onClick: () => moveModal({ pageType: "detail" }),
        },
        { text: "저장", onClick: () => moveModal({ pageType: "detail" }) },
      ];
    case "add":
      return [
        {
          text: "저장",
          onClick: () => moveModal({ pageType: "detail" }),
        },
      ];

    case "item":
      return [
        {
          text: "취소",
          onClick: () => moveModal({ pageType: "list" }),
        },
        { text: "저장", onClick: () => moveModal({ pageType: "list" }) },
      ];
    case "list":
      return [
        {
          text: "click",
          onClick: () => moveModal({ pageType: "item" }),
        },
        {
          text: "delete",
          onClick: () => moveModal({ pageType: "categoryDelete" }),
          backClick: () => moveModal({ pageType: "list" }),
        },
      ];
    default:
      return [];
  }
};
