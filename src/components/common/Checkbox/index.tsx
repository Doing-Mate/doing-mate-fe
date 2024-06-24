import { Checkbox as MuiCheckbox } from "@mui/material";

interface CheckboxProps {
  colorType: string;
}

export const Checkbox = ({ colorType, ...props }: CheckboxProps) => {
  return (
    <MuiCheckbox
      disableRipple
      sx={{
        color: colorType,
        "&.Mui-checked": {
          color: colorType,
        },
        "& .MuiSvgIcon-root": { fontSize: 30 },
      }}
      {...props}
    />
  );
};
