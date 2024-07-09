import { Button } from "../common/Button";
import styled from "styled-components";

interface CloseButtonProps {
  icon: string;
  onClick: () => void;
}

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

const StyledCloseButton = styled(Button)`
  margin: 20px;
  float: right;
`;

export const CloseButton = ({ icon, onClick }: CloseButtonProps) => {
  return (
    <StyledCloseButton
      sizeType={"smallSquare"}
      fontSizeType={"smallFont"}
      borderType={"none"}
      onClick={onClick}
    >
      <IconImage src={icon} />
    </StyledCloseButton>
  );
};
