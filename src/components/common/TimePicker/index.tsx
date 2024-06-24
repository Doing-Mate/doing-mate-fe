import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker/TimePicker";
import dayjs, { Dayjs } from "dayjs";
// import styled from "styled-components";
// import { styled } from "@mui/material/styles";

export const TimePicker = () => {
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiTimePicker
        label=""
        value={startTime}
        onChange={(newTime) => setStartTime(newTime)}
      />
    </LocalizationProvider>
  );
};

// const StyledReactTimePicker = styled(MuiTimePicker)`
//   padding: 5px 10px;
// `;
