import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker/TimePicker";
import dayjs, { Dayjs } from "dayjs";

interface TimePickerProps {
  dataType: "start" | "end";
  dataTime?: string;
  onChangeData: (value: string) => void;
}

export const TimePicker = ({
  dataType,
  dataTime,
  onChangeData,
}: TimePickerProps) => {
  const [startTime, setStartTime] = useState<Dayjs | null>(null);

  useEffect(() => {
    startTime !== null && onChangeData(startTime!.format("HH:mm").toString());
  }, [startTime]);

  useEffect(() => {
    dataTime !== undefined
      ? setStartTime(dayjs(dataTime))
      : dataType === "start"
      ? setStartTime(dayjs("00:00", "HH:mm"))
      : setStartTime(dayjs("23:59", "HH:mm"));
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiTimePicker
        label=""
        value={startTime}
        onChange={(newTime) => setStartTime(newTime)}
        sx={{
          height: "fit-content",
          ".MuiOutlinedInput-root": {
            fontFamily: "inherit",
            fontSize: "small",
            width: 100,
            paddingRight: 0,
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
