import { Label } from "../common/label";

export const MessageLabel = ({ text }) => {
  return (
    <Label fontSizeType={"smallFont"} backgroundColor="white">
      {text}
    </Label>
  );
};
