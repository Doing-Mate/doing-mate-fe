import { Calendar } from "../../components/common/Calendar";
import { useModalStateContext } from "../../hooks/useContext/useModalStateContext";
import { useModalModeContext } from "../../hooks/useContext/useModalModeContext";
import {
  ScheduleDetailComponent,
  ScheduleAddComponent,
} from "../../context/modalPageComponents";
import { useSelectedScheduleDataContext } from "../../hooks/useContext/useSelectedScheduleDataContext";

export const Main = () => {
  const { onModal, setOnModal } = useModalStateContext();
  const { setModalMode } = useModalModeContext();
  const { selectedScheduleList } = useSelectedScheduleDataContext();

  const eventClick = (eventId: string) => {
    ScheduleDetailComponent.data = selectedScheduleList.find(
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
      events={selectedScheduleList}
      eventClick={eventClick}
      todoPlusClick={todoPlusClick}
    />
  );
};
