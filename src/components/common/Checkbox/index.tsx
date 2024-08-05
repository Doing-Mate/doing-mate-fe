import { Checkbox as MuiCheckbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

interface CheckboxProps {
  colorType?: string;
  text?: string;
  onChange?: () => void;
}

export const Checkbox = ({
  colorType,
  text,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <StyledCheckbox
      control={
        <MuiCheckbox
          disableRipple
          defaultChecked
          onChange={onChange}
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
