import { Button } from "../common/Button";
import styled from "styled-components";

interface MoveMonthButtonProps {
  icon: string;
}

const TransparentButton = styled(Button)`
  background-color: transparent;
`;

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

export const MoveMonthButton = ({ icon }: MoveMonthButtonProps) => {
  return (
    <TransparentButton
      sizeType={"smallSquare"}
      fontSizeType={"smallFont"}
      borderType={"none"}
    >
      <IconImage src={icon} />
    </TransparentButton>
  );
};
