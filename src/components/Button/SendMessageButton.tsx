import { Button } from "../common/Button";
import styled from "styled-components";

interface SendMessageButtonProps {
  text: string;
}

const StyledButton = styled(Button)`
  font-weight: bold;
`;

export const SendMessageButton = ({ text }: SendMessageButtonProps) => {
  return (
    <StyledButton
      sizeType={"mediumSquare"}
      fontSizeType={"smallFont"}
      borderType={"none"}
    >
      {text}
    </StyledButton>
  );
};
