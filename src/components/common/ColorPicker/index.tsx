import { useState } from "react";
import { ChromePicker } from "react-color";

export const ColorPicker = () => {
  const [color, setColor] = useState<string>("#000");

  const handleChangeComplete = (color: string) => {
    setColor(color);
  };

  return (
    <ChromePicker
      styles={{ default: { picker: { width: "300px" } } }}
      color={color}
      onChange={(color) => handleChangeComplete(color.hex)}
    />
  );
};
