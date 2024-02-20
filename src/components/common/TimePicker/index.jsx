import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker/TimePicker";
import styled from "styled-components";

export const TimePicker = () => {
  const [startTime, setStartTime] = useState();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledReactTimePicker
        label=""
        value={startTime}
        onChange={(time) => setStartTime(time)}
      />
    </LocalizationProvider>
  );
};

const StyledReactTimePicker = styled(MuiTimePicker)`
  padding: 5px 10px;
`;
