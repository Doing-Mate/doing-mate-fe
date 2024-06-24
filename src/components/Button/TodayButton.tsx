import { Button } from "../common/Button";

interface TodayButtonProps {
  text: string;
}

export const TodayButton = ({ text }: TodayButtonProps) => {
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
