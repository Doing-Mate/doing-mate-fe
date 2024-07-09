import { Calendar } from "../../components/common/Calendar";
import { EventClickArg } from "@fullcalendar/core";
import { useModalStateContext } from "../../hooks/useModalStateContext";
import { useModalModeContext } from "../../hooks/useModalModeContext";
import {
  ScheduleDetailComponent,
  ScheduleAddComponent,
} from "../../context/modalPageComponents";

export const Main = () => {
  const { onModal, setOnModal } = useModalStateContext();
  const { setModalMode } = useModalModeContext();

  const eventClick = (info: EventClickArg) => {
    const data = info.event._def;
    console.log(data);

    setModalMode(ScheduleDetailComponent);
    setOnModal(!onModal);
  };

  const todoPlusClick = () => {
    setModalMode(ScheduleAddComponent);
    setOnModal(!onModal);
  };

  return <Calendar eventClick={eventClick} todoPlusClick={todoPlusClick} />;
};
