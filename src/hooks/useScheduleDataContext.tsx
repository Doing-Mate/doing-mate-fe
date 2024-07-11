import { useContext } from "react";
import { ScheduleDataContext } from "../context/dataContext";

export const useScheduleDataContext = () => {
  const scheduleData = useContext(ScheduleDataContext);
  if (scheduleData === undefined) {
    throw new Error("useScheduleDataContext should be used within Provider");
  }
  return scheduleData;
};
