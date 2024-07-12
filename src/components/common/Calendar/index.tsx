import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import { DayCellContentArg } from "@fullcalendar/core";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { ScheduleDataProps } from "../../../context/dataInterface";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface CalendarProps {
  eventClick: (eventId: string) => void;
  todoPlusClick: () => void;
  events: ScheduleDataProps[];
}
export const Calendar = ({
  eventClick,
  todoPlusClick,
  events,
}: CalendarProps) => {
  const calendarEventClick = (info: EventClickArg) => {
    eventClick(info.event._def.publicId);
  };

  const calendarDateClick = (info: DateClickArg) => {
    console.log(info.dateStr);
  };

  return (
    <FullCalendar
      height={"inherit"}
      locale="kr"
      plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
      themeSystem={"bootstrap5"}
      initialView={"dayGridMonth"}
      editable={true}
      dayMaxEvents={true}
      headerToolbar={{
        start: "prev next today",
        center: "title",
        end: "addTodoButton",
      }}
      customButtons={{
        addTodoButton: {
          text: "+ Todo",
          click: todoPlusClick,
        },
      }}
      dateClick={calendarDateClick}
      eventClick={calendarEventClick}
      dayCellContent={dayCellContent}
      events={events}
    />
  );
};

//일 없애기
const dayCellContent = (info: DayCellContentArg) => {
  const number = document.createElement("a");
  number.classList.add("fc-daygrid-day-number");
  number.innerHTML = info.dayNumberText.replace("일", "");
  if (info.view.type === "dayGridMonth") {
    return {
      html: number.outerHTML,
    };
  }
  return {
    domNodes: [],
  };
};
