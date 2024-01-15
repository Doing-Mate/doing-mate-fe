import Button from "../common/Button";

const SmallRectButton = ({ text }) => {
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

export default SmallRectButton;
