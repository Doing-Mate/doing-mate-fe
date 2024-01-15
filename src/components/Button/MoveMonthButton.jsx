import Button from "../common/Button";
import styled from "styled-components";

const TransparentButton = styled(Button)`
  background-color: transparent;
`;

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

const MoveMonthButton = ({ icon }) => {
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

export default MoveMonthButton;
