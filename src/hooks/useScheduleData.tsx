import { ScheduleDataProps } from "../context/dataInterface";
import { postSchedule, deleteSchedule } from "../api/schedule";
import { useAllScheduleDataContext } from "./useContext/useAllScheduleDataContext";
import { useUserUIDContext } from "./useContext/useUserUidContext";

export const useScheduleData = () => {
  const { allScheduleList, setAllScheduleList } = useAllScheduleDataContext();
  const { userUID } = useUserUIDContext();

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
        (postSchedule(userUID, newData),
        setAllScheduleList([...allScheduleList, newData]))
      : [];

    return result;
  };

  const DeleteScheduleData = (newData: ScheduleDataProps) => {
    const newScheduleList = allScheduleList.filter(
      (item) => item.id !== newData.id
    );

    deleteSchedule(userUID, newData.id);
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
    deleteSchedule(userUID, newData.id);
    delete newData.color;

    newData.id = createId(newData.start.split(" ")[0], 1);

    checkValidate(newData)
      ? (result = true) &&
        (postSchedule(userUID, newData),
        setAllScheduleList([...newScheduleList, newData]))
      : [];

    return result;
  };

  return { AddScheduleData, DeleteScheduleData, ModifyScheduleData };
};
