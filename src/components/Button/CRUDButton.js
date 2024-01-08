import Button from "../common/Button";

const CRUDButton = ({ text }) => {
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

export default CRUDButton;
