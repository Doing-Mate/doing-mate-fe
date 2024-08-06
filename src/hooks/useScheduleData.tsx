import { ScheduleDataProps } from "../context/dataInterface";
import { postSchedule, deleteSchedule } from "../api/schedule";
import { useAllScheduleDataContext } from "./useContext/useAllScheduleDataContext";

export const useScheduleData = () => {
  const { allScheduleList, setAllScheduleList } = useAllScheduleDataContext();

  const checkValidate = (newData: ScheduleDataProps): boolean => {
    let result = false;

    const checkValidate = {
      category_id: "카테고리",
      title: "제목",
      start: "기간",
      end: "기간",
      importance: "중요도",
    };

    const check = Object.entries(checkValidate).find((checkItem) =>
      Object.entries(newData).find(
        (dataItem) => checkItem[0] === dataItem[0] && dataItem[1] === ""
      )
    );

    check !== undefined
      ? alert(check[1] + "을/를 입력해주세요.")
      : (result = true);
    return result;
  };

  const createId = (data: string, num: number): string => {
    const id = data + "_" + String(num).padStart(2, "0");
    const hasId = allScheduleList.find(
      (scheduleItem) => scheduleItem.id === id
    );

    return hasId !== undefined ? createId(data, ++num) : id;
  };

  const AddScheduleData = (newData: ScheduleDataProps): boolean => {
    let result = false;

    newData.id = createId(newData.start.split(" ")[0], 1);

    checkValidate(newData)
      ? (result = true) &&
        (postSchedule(newData),
        setAllScheduleList([...allScheduleList, newData]))
      : [];

    return result;
  };

  const DeleteScheduleData = (newData: ScheduleDataProps) => {
    const newScheduleList = allScheduleList.filter(
      (item) => item.id !== newData.id
    );

    deleteSchedule(newData.id);
    setAllScheduleList(newScheduleList);
  };

  const ModifyScheduleData = (newData: ScheduleDataProps): boolean => {
    let result = false;

    // const newScheduleList = await allScheduleList.map((item) =>
    //   item.id === newData.id ? newData : item
    // );

    const newScheduleList = allScheduleList.filter(
      (item) => item.id !== newData.id
    );
    deleteSchedule(newData.id);
    delete newData.color;

    newData.id = createId(newData.start.split(" ")[0], 1);

    checkValidate(newData)
      ? (result = true) &&
        (postSchedule(newData),
        setAllScheduleList([...newScheduleList, newData]))
      : [];

    return result;
  };

  return { AddScheduleData, DeleteScheduleData, ModifyScheduleData };
};
