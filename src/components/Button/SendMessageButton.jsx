import { Button } from "../common/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-weight: bold;
`;

export const SendMessageButton = ({ text }) => {
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