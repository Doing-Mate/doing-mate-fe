import { useEffect } from "react";
import { Calendar } from "../../components/common/Calendar";
import { useModalStateContext } from "../../hooks/useModalStateContext";
import { useModalModeContext } from "../../hooks/useModalModeContext";
import { useScheduleDataContext } from "../../hooks/useScheduleDataContext";
import { useCategoryDataContext } from "../../hooks/useCategoryDataContext";
import {
  ScheduleDetailComponent,
  ScheduleAddComponent,
} from "../../context/modalPageComponents";
import { getScheduleData, getCategoryData } from "../../apis/fetch";

export const Main = () => {
  const { onModal, setOnModal } = useModalStateContext();
  const { setModalMode } = useModalModeContext();
  const { scheduleList, setScheduleList } = useScheduleDataContext();
  const { setCategoryList } = useCategoryDataContext();

  const getAndSetDataList = async () => {
    const categoryData = await getCategoryData();
    const scheduleData = await getScheduleData();
    const scheduleList = scheduleData.map((scheduleItem) => {
      const category = categoryData.find(
        (categoryItem) => categoryItem.id === scheduleItem.category_id
      );
      return {
        ...scheduleItem,
        color: category?.color || scheduleItem.color,
      };
    });

    setCategoryList(categoryData);
    setScheduleList(scheduleList);
  };

  useEffect(() => {
    getAndSetDataList();
  }, []);

  const eventClick = (eventId: string) => {
    ScheduleDetailComponent.data = scheduleList.find(
      (scheduleItem) => scheduleItem.id === eventId
    );
    setModalMode(ScheduleDetailComponent);
    setOnModal(!onModal);
  };

  const todoPlusClick = () => {
    setModalMode(ScheduleAddComponent);
    setOnModal(!onModal);
  };

  return (
    <Calendar
      events={scheduleList}
      eventClick={eventClick}
      todoPlusClick={todoPlusClick}
    />
  );
};
