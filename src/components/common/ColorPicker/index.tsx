import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

interface ColorPickerProps {
  categoryColor?: string;
}

export const ColorPicker = ({ categoryColor }: ColorPickerProps) => {
  const [color, setColor] = useState<string>("#000");

  useEffect(() => {
    categoryColor !== undefined && setColor(categoryColor);
  }, []);

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
