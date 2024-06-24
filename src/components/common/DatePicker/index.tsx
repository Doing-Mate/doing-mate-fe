import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

export const DatePicker = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        format="YYYY. MM. DD. ddd"
        value={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </LocalizationProvider>
  );
};
