import Button from "../common/Button";

const MoveMonthButton = ({ icon }) => {
  return (
    <Button
      sizeType={"smallSquare"}
      fontSizeType={"smallFont"}
      borderType={"round"}
    >
      <img src={icon} />
    </Button>
  );
};

export default MoveMonthButton;
