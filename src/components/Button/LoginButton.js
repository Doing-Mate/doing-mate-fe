import Button from "../common/Button";

const LoginButton = ({ icon, text }) => {
  return (
    <Button
      sizeType={"largeRectangle"}
      fontSizeType={"largeFont"}
      borderType={"round"}
    >
      <img src={icon} />
      {text}
    </Button>
  );
};

export default LoginButton;
