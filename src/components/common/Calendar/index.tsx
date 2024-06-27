import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg, DayCellContentArg } from "@fullcalendar/core";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Calendar = () => {
  const events = [
    {
      title: "미니 생일",
      start: "2024-06-11 12:00",
      end: "2024-06-12 15:00",
      color: "#EA0071",
      comment: "메모입니둥",
    },
    { title: "둔산동 데이트", date: "2024-06-13" },
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
      buttonIcons={{
        SecretaryButton: "chat-right-heart-fill",
      }}
      headerToolbar={{
        start: "prev next today",
        center: "title",
        end: "addTodoButton",
      }}
      footerToolbar={{
        end: "SecretaryButton",
      }}
      customButtons={{
        addTodoButton: {
          text: "+ Todo",
          themeIcon: "red",
          click: function () {
            alert("clicked addTodoButton");
          },
        },
        SecretaryButton: {
          text: "secretary",
          click: function () {
            alert("clicked secretaryButton");
          },
        },
      }}
      dateClick={dateClick}
      eventClick={eventClick}
      dayCellContent={dayCellContent}
      events={events}
    />
  );
};

const dateClick = (info: DateClickArg) => {
  console.log(info.dateStr);
};

const eventClick = (info: EventClickArg) => {
  console.log(info.event);
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
