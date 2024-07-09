import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import { DayCellContentArg } from "@fullcalendar/core";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface CalendarProps {
  eventClick: (info: EventClickArg) => void;
  todoPlusClick: () => void;
}
export const Calendar = ({ eventClick, todoPlusClick }: CalendarProps) => {
  const events = [
    {
      title: "미니 생일",
      start: "2024-07-11 12:00",
      end: "2024-07-12 15:00",
      color: "#EA0071",
      comment: "메모입니둥",
    },
    { title: "둔산동 데이트", date: "2024-07-13" },
  ];

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
      eventClick={eventClick}
      dayCellContent={dayCellContent}
      events={events}
    />
  );
};

const calendarDateClick = (info: DateClickArg) => {
  console.log(info.dateStr);
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
