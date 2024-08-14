import { Button } from "../common/Button";
import { LoginIcon } from "../Icon/LoginIcon";
import styled from "styled-components";

interface LoginButtonProps {
  icon: string;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
  borderType?: "none" | "square" | "round" | "roundNone";
  onClick?: () => void;
}

const StyledLoginButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin: auto;
`;

export const LoginButton = ({
  icon,
  text,
  backgroundColor,
  fontColor,
  borderType = "roundNone",
  onClick,
}: LoginButtonProps) => {
  return (
    <StyledLoginButton
      sizeType={"largeRectangle"}
      fontSizeType={"largeFont"}
      borderType={borderType}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      onClick={onClick}
    >
      <LoginIcon icon={icon} />
      {text}
    </StyledLoginButton>
  );
};
