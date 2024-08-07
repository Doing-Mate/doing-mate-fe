import { Checkbox as MuiCheckbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";
import { ScheduleDataProps } from "../../../context/dataInterface";
import { useEffect, useState } from "react";

interface CheckboxProps {
  colorType?: string;
  text?: string;
  onChange: (value: boolean) => void;
  inputData?: ScheduleDataProps;
}

export const Checkbox = ({
  colorType,
  text,
  onChange,
  inputData,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    inputData !== undefined
      ? inputData?.start.split(" ")[1] === "00:00" &&
        inputData?.end.split(" ")[1] === "23:59"
        ? handleChecked(true)
        : handleChecked(false)
      : [];
  }, [inputData?.start, inputData?.end]);

  const handleChecked = (value: boolean) => {
    setChecked(value);
    onChange(value);
  };
  return (
    <StyledCheckbox
      control={
        <MuiCheckbox
          disableRipple
          checked={checked}
          onChange={(event) => handleChecked(event.target.checked)}
          sx={{
            color: colorType,
            "&.Mui-checked": {
              color: colorType,
            },
            "& .MuiSvgIcon-root": { fontSize: 22 },
          }}
          {...props}
        />
      }
      label={text}
    />
  );
};

const StyledCheckbox = styled(FormControlLabel)`
  margin: -5px;
`;
