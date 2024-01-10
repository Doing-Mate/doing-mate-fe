import Button from "../common/Button";

const SecretaryButton = ({ icon }) => {
  return (
    <Button
      sizeType={"largeSquare"}
      fontSizeType={"largeFont"}
      borderType={"none"}
    >
      <img src={icon} />
    </Button>
  );
};

export default SecretaryButton;
