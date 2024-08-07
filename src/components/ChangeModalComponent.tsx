import { useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";
import { useModalModeContext } from "../hooks/useContext/useModalModeContext";
import { CategoryDataProps, ScheduleDataProps } from "../context/dataInterface";
import { useScheduleData } from "../hooks/useScheduleData";
import { useCategoryData } from "../hooks/useCategoryData";

interface footerDataProps {
  text: string;
  onClick: () => void;
  OKClick?: () => void;
  backClick?: () => void;
}

interface ChangeModalComponentProps {
  propsType: "detail" | "modify" | "add" | "list" | "item";
  inputData?: ScheduleDataProps | CategoryDataProps;
}

export const ChangeModalComponent = ({
  propsType,
  inputData,
}: ChangeModalComponentProps): footerDataProps[] => {
  const { modalMode, setModalMode } = useModalModeContext();
  const [newMode, dispatch] = useReducer(reducer, modalMode);
  const { AddScheduleData, ModifyScheduleData, DeleteScheduleData } =
    useScheduleData();
  const { DeleteCategoryData, ModifyCategoryData } = useCategoryData();

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
  }, [newMode]);

  switch (propsType) {
    case "detail":
      return [
        {
          text: "삭제",
          onClick: () => moveModal({ pageType: "delete" }),
          OKClick: () => DeleteScheduleData(inputData as ScheduleDataProps),
          backClick: () => moveModal({ pageType: "detail" }),
        },
        {
          text: "수정",
          onClick: () => {
            moveModal({ pageType: "modify" });
          },
        },
      ];
    case "modify":
      return [
        {
          text: "취소",
          onClick: () => moveModal({ pageType: "detail" }),
        },
        {
          text: "저장",
          onClick: () => {
            ModifyScheduleData(inputData as ScheduleDataProps) &&
              moveModal({ pageType: "detail" });
          },
        },
      ];
    case "add":
      return [
        {
          text: "저장",
          onClick: () => {
            AddScheduleData(inputData as ScheduleDataProps) &&
              moveModal({ pageType: "detail" });
          },
        },
      ];

    case "item":
      return [
        {
          text: "취소",
          onClick: () => moveModal({ pageType: "list" }),
        },
        {
          text: "저장",
          onClick: () => {
            ModifyCategoryData(inputData as CategoryDataProps) &&
              moveModal({ pageType: "list" });
          },
        },
      ];
    case "list":
      return [
        {
          text: "click",
          onClick: () => {
            moveModal({ pageType: "item" });
          },
        },
        {
          text: "delete",
          onClick: () => moveModal({ pageType: "categoryDelete" }),
          OKClick: () => {
            DeleteCategoryData(inputData as CategoryDataProps);
            moveModal({ pageType: "list" });
          },
          backClick: () => moveModal({ pageType: "list" }),
        },
      ];
    default:
      return [];
  }
};
