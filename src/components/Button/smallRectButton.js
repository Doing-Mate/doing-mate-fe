import Button from "../common/Button";

const smallRectButton = ({ text }) => {
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

export default smallRectButton;
