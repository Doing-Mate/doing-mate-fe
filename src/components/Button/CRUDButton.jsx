import { Button } from "../common/Button";
import styled from "styled-components";

const ColorButton = styled(Button)`
  font-weight: bold;
  color: ${({ colorType }) => colorType};
`;

export const CRUDButton = ({ text, colorType = "black" }) => {
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
