import { Button } from "../common/Button";
import styled from "styled-components";

interface CRUDButtonProps {
  text?: string;
  colorType?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ColorButton = styled(Button)<CRUDButtonProps>`
  font-weight: bold;
  margin-left: 10px;
  background-color: ${({ colorType }) => colorType};
`;

export const CRUDButton = ({
  text,
  colorType = "black",
  onClick,
  children,
}: CRUDButtonProps) => {
  return (
    <ColorButton
      sizeType={"smallRectangle"}
      fontSizeType={"mediumFont"}
      borderType={"modal"}
      colorType={colorType}
      onClick={onClick}
    >
      {text}
      {children}
    </ColorButton>
  );
};
