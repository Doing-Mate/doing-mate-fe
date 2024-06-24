import { Button } from "../common/Button";

interface CreateTodoButtonProps {
  text?: string;
}

export const CreateTodoButton = ({ text }: CreateTodoButtonProps) => {
  return (
    <Button
      sizeType={"mediumRectangle"}
      fontSizeType={"mediumFont"}
      borderType={"round"}
    >
      {text}
    </Button>
  );
};
