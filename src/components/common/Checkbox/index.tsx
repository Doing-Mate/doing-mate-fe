import { Checkbox as MuiCheckbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

interface CheckboxProps {
  colorType?: string;
  text?: string;
}

export const Checkbox = ({ colorType, text, ...props }: CheckboxProps) => {
  return (
    <StyledCheckbox
      control={
        <MuiCheckbox
          disableRipple
          defaultChecked
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
