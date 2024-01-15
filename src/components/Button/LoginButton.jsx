import Button from "../common/Button";
import styled from "styled-components";

const StyledLoginButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
  margin: auto;
`;

const LoginButton = ({ icon, text }) => {
  return (
    <StyledLoginButton
      sizeType={"largeRectangle"}
      fontSizeType={"largeFont"}
      borderType={"round"}
    >
      <IconImage src={icon} />
      {text}
    </StyledLoginButton>
  );
};

export default LoginButton;
