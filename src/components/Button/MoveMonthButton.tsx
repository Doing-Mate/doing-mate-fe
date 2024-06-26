import { Button } from "../common/Button";
import styled from "styled-components";

interface MoveMonthButtonProps {
  icon: string;
}

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

export const MoveMonthButton = ({ icon }: MoveMonthButtonProps) => {
  return (
    <Button
      sizeType={"smallSquare"}
      fontSizeType={"smallFont"}
      borderType={"none"}
    >
      <IconImage src={icon} />
    </Button>
  );
};
