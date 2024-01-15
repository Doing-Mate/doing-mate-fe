import { Button } from "../common/Button";

export const CreateTodoButton = ({ text }) => {
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
