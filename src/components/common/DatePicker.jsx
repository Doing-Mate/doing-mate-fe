import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as ReactDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export const DatePicker = () => {
  const [startDate, setStartDate] = useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ReactDatePicker
        format="YYYY. MM. DD. ddd"
        value={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </LocalizationProvider>
  );
};
