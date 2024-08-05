import { useCategoryDataContext } from "./useContext/useCategoryDataContext";
import { CategoryDataProps } from "../context/dataInterface";
import { postCategory, deleteCategory } from "../api/category";

export const useCategoryData = () => {
  const { categoryList, setCategoryList } = useCategoryDataContext();

  const checkValidate = (newData: CategoryDataProps): boolean => {
    let result = false;
    const checkValidate = { title: "카테고리 제목", color: "색상" };

    const check = Object.entries(checkValidate).find((checkItem) =>
      Object.entries(newData).find(
        (dataItem) => checkItem[0] === dataItem[0] && dataItem[1] === ""
      )
    );

    check !== undefined
      ? alert(check[1] + "을 입력해주세요.")
      : (result = true);

    return result;
  };

  const createId = (num: number): string => {
    const id = "cg_" + String(num).padStart(2, "0");
    const hasId = categoryList.find((categoryItem) => categoryItem.id === id);

    return hasId !== undefined ? createId(++num) : id;
  };

  const AddCategoryData = (newData: CategoryDataProps): boolean => {
    let result = false;

    newData.id = createId(1);

    checkValidate(newData)
      ? (result = true) &&
        (postCategory(newData), setCategoryList([...categoryList, newData]))
      : [];

    return result;
  };

  const DeleteCategoryData = (newData: CategoryDataProps) => {
    const newCategoryList = categoryList.filter(
      (item) => item.id !== newData.id
    );

    deleteCategory(newData.id);
    setCategoryList(newCategoryList);
  };

  const ModifyCategoryData = (newData: CategoryDataProps): boolean => {
    if (newData.id === "") {
      return AddCategoryData(newData);
    }

    let result = false;

    const newCategoryList = categoryList.map((item) =>
      item.id === newData.id ? newData : item
    );

    checkValidate(newData)
      ? (result = true) &&
        (postCategory(newData), setCategoryList(newCategoryList))
      : [];

    return result;
  };

  return { AddCategoryData, DeleteCategoryData, ModifyCategoryData };
};
