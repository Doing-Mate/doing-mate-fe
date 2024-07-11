import { useEffect } from "react";
import { Calendar } from "../../components/common/Calendar";
import { EventClickArg } from "@fullcalendar/core";
import { useModalStateContext } from "../../hooks/useModalStateContext";
import { useModalModeContext } from "../../hooks/useModalModeContext";
import { useScheduleDataContext } from "../../hooks/useScheduleDataContext";
import { useCategoryDataContext } from "../../hooks/useCategoryDataContext";
import {
  ScheduleDetailComponent,
  ScheduleAddComponent,
} from "../../context/modalPageComponents";
import { getScheduleData, getCategoryData } from "../../apis/fetch";
import { ScheduleDataProps } from "../../context/dataInterface";

export const Main = () => {
  const { onModal, setOnModal } = useModalStateContext();
  const { setModalMode } = useModalModeContext();
  const { scheduleList, setScheduleList } = useScheduleDataContext();
  const { categoryList, setCategoryList } = useCategoryDataContext();

  const getAndSetDataList = async () => {
    setScheduleList(await getScheduleData());
    setCategoryList(await getCategoryData());
  };

  useEffect(() => {
    getAndSetDataList();
  }, []);

  useEffect(() => {
    const newScheduleList: ScheduleDataProps[] = scheduleList.map(
      (scheduleItem) => {
        scheduleItem.color = categoryList.find(
          (categoryItem) => categoryItem.id === scheduleItem.category_id
        )?.color;
        return scheduleItem;
      }
    );
    setScheduleList(newScheduleList);
  }, [scheduleList, categoryList, setScheduleList]);

  useEffect(() => {
    console.log(scheduleList);
  }, [scheduleList]);

  const eventClick = (info: EventClickArg) => {
    const data = info.event._def;

    ScheduleDetailComponent.data = scheduleList.find(
      (scheduleItem) => scheduleItem.id === data.publicId
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
