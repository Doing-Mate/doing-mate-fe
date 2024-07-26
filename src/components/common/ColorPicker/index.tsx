import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

interface ColorPickerProps {
  categoryColor?: string;
  onChangeData: (value: string) => void;
}

export const ColorPicker = ({
  categoryColor,
  onChangeData,
}: ColorPickerProps) => {
  const [color, setColor] = useState<string>("#000");

  useEffect(() => {
    console.log(categoryColor);
    categoryColor !== undefined &&
      categoryColor !== "" &&
      setColor(categoryColor);
  }, [categoryColor]);

  useEffect(() => {
    onChangeData(color);
  }, [color]);

  return (
    <ChromePicker
      styles={{ default: { picker: { width: "300px" } } }}
      color={color}
      onChange={(color) => setColor(color.hex)}
    />
  );
};
