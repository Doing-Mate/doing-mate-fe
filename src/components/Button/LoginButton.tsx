import { Button } from "../common/Button";
import { LoginIcon } from "../Icon/LoginIcon";
import styled from "styled-components";

interface LoginButtonProps {
  icon: string;
  text: string;
}

const StyledLoginButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const LoginButton = ({ icon, text }: LoginButtonProps) => {
  return (
    <StyledLoginButton
      sizeType={"largeRectangle"}
      fontSizeType={"largeFont"}
      borderType={"round"}
    >
      <LoginIcon icon={icon} />
      {text}
    </StyledLoginButton>
  );
};
