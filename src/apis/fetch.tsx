import { ScheduleDataProps } from "../context/dataInterface";
import { CategoryDataProps } from "../context/dataInterface";

export const getScheduleData = async (): Promise<ScheduleDataProps[]> => {
  const response = await fetch("./data/scheduleData.json");
  const data = await response.json();
  return data;
};

export const getCategoryData = async (): Promise<CategoryDataProps[]> => {
  const response = await fetch("./data/categoryData.json");
  const data = await response.json();
  return data;
};
