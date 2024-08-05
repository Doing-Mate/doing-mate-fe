import { useContext } from "react";
import { AllScheduleDataContext } from "../../context/dataContext";

export const useAllScheduleDataContext = () => {
  const allScheduleData = useContext(AllScheduleDataContext);
  if (allScheduleData === undefined) {
    throw new Error("useScheduleDataContext should be used within Provider");
  }
  return allScheduleData;
};
