import { useState } from "react";
import { CategoryDataProps } from "../context/dataInterface";

export const useInputCategoryData = () => {
  const [inputData, setInputData] = useState<CategoryDataProps>({
    id: "",
    title: "",
    color: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setInputData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return {
    inputData,
    setInputData,
    handleInputChange,
  };
};
