import { Button } from "../common/Button";
import styled from "styled-components";

interface CRUDButtonProps {
  text?: string;
  colorType?: string;
}

const ColorButton = styled(Button)<CRUDButtonProps>`
  font-weight: bold;
  color: ${({ colorType }) => colorType};
`;

export const CRUDButton = ({ text, colorType = "black" }: CRUDButtonProps) => {
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
