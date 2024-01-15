import { Button } from "../common/Button";
import styled, { css } from "styled-components";

const ColorButton = styled(Button)`
  font-weight: bold;
  ${({ colorType }) =>
    css`
      color: ${colorType};
    `}
`;

const CRUDButton = ({ text, colorType = "black" }) => {
  return (
    <ColorButton
      sizeType={"mediumRectangle"}
      fontSizeType={"mediumFont"}
      borderType={"round"}
      colorType={colorType}
    >
      {text}
    </ColorButton>
  );
};

export default CRUDButton;
