import { useScheduleDataContext } from "./useScheduleDataContext";
import { ScheduleDataProps } from "../context/dataInterface";

export const useScheduleData = () => {
  const { scheduleList, setScheduleList } = useScheduleDataContext();

  const AddData = (newData: ScheduleDataProps) => {
    newData.id = newData.start.split(" ")[0] + "_" + "122";
    console.log(newData);
    setScheduleList([...scheduleList, newData]);
  };

  const DeleteData = (dataId: string) => {
    const newScheduleList = scheduleList.filter((item) => item.id !== dataId);

    setScheduleList(newScheduleList);
  };

  const ModifyDataList = (newData: ScheduleDataProps) => {
    console.log(newData.id);
    const newScheduleList = scheduleList.filter(
      (item) => item.id !== newData.id
    );
    console.log(newScheduleList);
    setScheduleList([...newScheduleList, newData]);
  };

  return { AddData, DeleteData, ModifyDataList };
};
