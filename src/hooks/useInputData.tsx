import { useState } from "react";
import { ScheduleDataProps } from "../context/dataInterface";

export const useInputData = () => {
  const [inputData, setInputData] = useState<ScheduleDataProps>({
    id: "",
    category_id: "",
    title: "",
    start: "00000000 00:00",
    end: "00000000 00:00",
    repetition: "",
    importance: 0,
  });

  const handleInputChange = (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputData((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const handleDataChange = async (
    pickerType: "date" | "time",
    dataType: "start" | "end",
    value: string
  ) => {
    const newInputData = inputData[dataType].split(" ");

    pickerType === "date"
      ? (newInputData[0] = value)
      : (newInputData[1] = value);

    setInputData((prevState) => ({
      ...prevState,
      [dataType]: newInputData.join(" "),
    }));
  };

  const handleStarChange = (value: number) => {
    setInputData((prevState) => ({
      ...prevState,
      importance: value,
    }));
  };

  const handleDropdownChange = (
    field: "repetition" | "category_id",
    key: string
  ) => {
    setInputData((prevState) => ({
      ...prevState,
      [field]: key,
    }));
  };

  return {
    inputData,
    setInputData,
    handleInputChange,
    handleDataChange,
    handleStarChange,
    handleDropdownChange,
  };
};
