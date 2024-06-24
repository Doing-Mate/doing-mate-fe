import { Label } from "../common/Label";

interface MessageLabelProps {
  text: string;
}

export const MessageLabel = ({ text }: MessageLabelProps) => {
  return (
    <Label fontSizeType={"mediumFont"} backgroundColor="white">
      {text}
    </Label>
  );
};
