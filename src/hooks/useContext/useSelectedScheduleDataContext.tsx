import { useContext } from "react";
import { SeletedScheduleDataContext } from "../../context/dataContext";

export const useSelectedScheduleDataContext = () => {
  const selectedScheduleData = useContext(SeletedScheduleDataContext);
  if (selectedScheduleData === undefined) {
    throw new Error("useScheduleDataContext should be used within Provider");
  }
  return selectedScheduleData;
};
