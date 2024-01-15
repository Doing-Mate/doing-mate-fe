import { Button } from "../common/Button";

export const TodayButton = ({ text }) => {
  return (
    <Button
      sizeType={"smallRectangle"}
      fontSizeType={"smallFont"}
      borderType={"round"}
    >
      {text}
    </Button>
  );
};
