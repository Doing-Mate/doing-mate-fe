import { useScheduleDataContext } from "./useScheduleDataContext";
import { ScheduleDataProps } from "../context/dataInterface";

export const useScheduleData = () => {
  const { scheduleList, setScheduleList } = useScheduleDataContext();

  const checkValidate = (newData: ScheduleDataProps): boolean => {
    let result = true;
    const checkValidate = [
      "id",
      "category_id",
      "title",
      "start",
      "end",
      "repetition",
      "importance",
    ];

    Object.entries(newData).find((item) => {
      checkValidate.includes(item[0]) && item[1] === "" && (result = false);
    });
    return result;
  };

  const createId = (data: string, num: number): string => {
    const id = data + "_" + String(num).padStart(2, "0");
    const hasId = scheduleList.find((scheduleItem) => scheduleItem.id === id);

    return hasId !== undefined ? createId(data, ++num) : id;
  };

  const AddData = (newData: ScheduleDataProps): boolean => {
    let result = false;

    newData.id = createId(newData.start.split(" ")[0], 1);

    checkValidate(newData)
      ? (result = true) && setScheduleList([...scheduleList, newData])
      : alert("필수항목을 입력해주세요.");

    return result;
  };

  const DeleteData = (newData: ScheduleDataProps) => {
    const newScheduleList = scheduleList.filter(
      (item) => item.id !== newData.id
    );

    setScheduleList(newScheduleList);
  };

  const ModifyData = (newData: ScheduleDataProps): boolean => {
    let result = false;
    const newScheduleList = scheduleList.filter(
      (item) => item.id !== newData.id
    );

    checkValidate(newData)
      ? (result = true) && setScheduleList([...newScheduleList, newData])
      : alert("필수항목을 입력해주세요.");

    return result;
  };

  return { AddData, DeleteData, ModifyData };
};
