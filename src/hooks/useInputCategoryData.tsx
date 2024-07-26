import { useState } from "react";
import { CategoryDataProps } from "../context/dataInterface";

export const useInputCategoryData = () => {
  const [inputData, setInputData] = useState<CategoryDataProps>({
    id: "",
    title: "",
    color: "",
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const handleColorChange = (value: string) => {
    setInputData((prevState) => ({
      ...prevState,
      color: value,
    }));
  };

  return {
    inputData,
    setInputData,
    handleTitleChange,
    handleColorChange,
  };
};
