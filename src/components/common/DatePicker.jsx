import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";

export const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledDatePicker
      locale={ko}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="yyyy.MM.dd E요일"
    />
  );
};

const StyledDatePicker = styled(ReactDatePicker)`
  width: 110px;
  padding: 5px 10px;
`;
