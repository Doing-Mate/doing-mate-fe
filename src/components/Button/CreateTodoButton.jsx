import Button from "../common/Button";

const CreateTodoButton = ({ text }) => {
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

export default CreateTodoButton;
