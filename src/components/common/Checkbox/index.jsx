import { Checkbox as MuiCheckbox } from "@mui/material";

export const Checkbox = ({ colorType, ...props }) => {
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
