import { Button } from "../common/Button";
import styled from "styled-components";

interface SecretaryButtonProps {
  text: string;
}

const StyledButton = styled(Button)`
  font-weight: bold;
`;

export const SendMessageButton = ({ text }: SecretaryButtonProps) => {
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
