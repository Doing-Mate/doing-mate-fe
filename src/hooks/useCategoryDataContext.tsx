import { useContext } from "react";
import { CategoryDataContext } from "../context/dataContext";

export const useCategoryDataContext = () => {
  const categoryData = useContext(CategoryDataContext);
  if (categoryData === undefined) {
    throw new Error("useCategoryDataContext should be used within Provider");
  }
  return categoryData;
};
