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
        sx={{
          height: "fit-content",
          ".MuiOutlinedInput-root": {
            fontFamily: "inherit",
            fontSize: "small",
            width: 150,
            paddingRight: 0,
            marginRight: "5px",
          },
          ".MuiOutlinedInput-root input": {
            padding: "8.5px 0px 8.5px 10px",
          },
          ".MuiInputAdornment-root": {
            paddingRight: "10px",
            marginLeft: 0,
          },
        }}
        slotProps={{
          openPickerIcon: { fontSize: "small" },
          textField: {
            variant: "outlined",
            size: "small",
          },
        }}
      />
    </LocalizationProvider>
  );
};
