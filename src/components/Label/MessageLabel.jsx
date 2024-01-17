import { Label } from "../common/label";

export const MessageLabel = ({ text }) => {
  return (
    <Label fontSizeType={"mediumFont"} backgroundColor="white">
      {text}
    </Label>
  );
};
