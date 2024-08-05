import { useAllScheduleDataContext } from "./useContext/useAllScheduleDataContext";
import { useSelectedScheduleDataContext } from "./useContext/useSelectedScheduleDataContext";
import { useCategoryDataContext } from "./useContext/useCategoryDataContext";
import { useCheckedBoxList } from "./useCheckedBoxList";
import { useImportanceList } from "./useImportanceList";
import { getScheduleList } from "../api/schedule";
import { getCategoryList } from "../api/category";
import { useEffect } from "react";
import { ScheduleDataProps } from "../context/dataInterface";

export const useFilteringData = () => {
  const { allScheduleList, setAllScheduleList } = useAllScheduleDataContext();
  const { categoryList, setCategoryList } = useCategoryDataContext();
  const { selectedScheduleList, setSelectedScheduleList } =
    useSelectedScheduleDataContext();

  const { checkedBoxList, handleCheckbox } = useCheckedBoxList();
  const { checkedImportanceList, handleCheckImportance } = useImportanceList();

  useEffect(() => {
    getAndSetDataList();
  }, []);

  useEffect(() => {
    matchEventColor(selectedScheduleList);
  }, [categoryList]);

  useEffect(() => {
    filteringData();
  }, [allScheduleList, checkedBoxList, checkedImportanceList]);

  const filteringData = async () => {
    const filteredList1 = await filteringByCheckbox();
    const filteredList2 = await filteringByImportance();

    matchEventColor(
      filteredList1.filter((item) => filteredList2.includes(item))
    );
  };

  const getAndSetDataList = async () => {
    const categoryData = await getCategoryList();
    const scheduleData = await getScheduleList();
    setCategoryList(categoryData);
    setAllScheduleList(scheduleData);
  };

  const matchEventColor = (scheduleList: ScheduleDataProps[]) => {
    const newScheduleList = scheduleList.map((scheduleItem) => {
      const category = categoryList.find(
        (categoryItem) => categoryItem.id === scheduleItem.category_id
      );
      return {
        ...scheduleItem,
        color: category?.color || scheduleItem.color,
      };
    });
    setSelectedScheduleList(newScheduleList);
  };

  const filteringByCheckbox = async () => {
    const newCheckedList = checkedBoxList.filter((item) => item[1] === true);

    const newScheduleList: ScheduleDataProps[] = [];
    allScheduleList.map((scheduleItem) => {
      newCheckedList.find(
        (checkItem) => scheduleItem.category_id === checkItem[0]
      )
        ? newScheduleList.push(scheduleItem)
        : [];
    });
    return newScheduleList;
  };

  const filteringByImportance = async () => {
    const newCheckedList = checkedImportanceList.filter(
      (item) => item[1] === true
    );
    const newScheduleList: ScheduleDataProps[] = [];
    allScheduleList.map((scheduleItem) => {
      newCheckedList.find(
        (checkItem) => "starLevel_" + scheduleItem.importance === checkItem[0]
      )
        ? newScheduleList.push(scheduleItem)
        : [];
    });

    return newScheduleList;
  };

  return {
    handleCheckbox,
    handleCheckImportance,
  };
};
