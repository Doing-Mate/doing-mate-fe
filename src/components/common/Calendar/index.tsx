import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

export const Calendar = () => {
  const events = [
    { title: "미니 생일", date: "2024-01-11", color: "#EA0071" },
    { title: "둔산동 데이트", date: "2024-01-13" },
  ];

  const dateClick = (info: DateClickArg) => {
    console.log(info.dateStr);
  };

  return (
    <FullCalendar
      locale="kr"
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start: "prev,next",
        center: "title",
        end: "today",
      }}
      dateClick={dateClick}
      events={events}
    />
  );
};
