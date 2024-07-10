import { Button } from "../common/Button";
import styled from "styled-components";

interface PlusButtonProps {
  icon: string;
  onClick: () => void;
}

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

const StyledPlusButton = styled(Button)`
  margin-right: 5px;
  float: right;
`;

export const PlusButton = ({ icon, onClick }: PlusButtonProps) => {
  return (
    <StyledPlusButton
      sizeType={"smallSquare"}
      fontSizeType={"smallFont"}
      borderType={"none"}
      onClick={onClick}
    >
      <IconImage src={icon} />
    </StyledPlusButton>
  );
};
