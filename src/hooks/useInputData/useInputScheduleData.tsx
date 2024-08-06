import { useState } from "react";
import { ScheduleDataProps } from "../../context/dataInterface";

export const useInputScheduleData = () => {
  const [inputData, setInputData] = useState<ScheduleDataProps>({
    id: "",
    category_id: "",
    title: "",
    start: "00000000 00:00",
    end: "00000000 00:00",
    allDay: true,
    repetition: "",
    importance: 0,
  });

  const handleInputChange = (field: string, value: string) => {
    setInputData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleDataChange = (
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

  const handleAllDayChange = (value: boolean) => {
    setInputData((prevState) => ({
      ...prevState,
      allDay: value,
    }));
  };

  return {
    inputData,
    setInputData,
    handleInputChange,
    handleDataChange,
    handleStarChange,
    handleDropdownChange,
    handleAllDayChange,
  };
};
