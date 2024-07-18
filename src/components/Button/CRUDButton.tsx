import React from "react";
import { Button } from "../common/Button";
import styled from "styled-components";

interface CRUDButtonProps {
  text?: string;
  colorType?: string;
  hoverColorType?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ColorButton = styled(Button)<CRUDButtonProps>`
  font-weight: bold;
  margin-left: 10px;
  background-color: ${({ colorType }) => colorType};
  &:hover {
    background: ${({ hoverColorType }) => hoverColorType};
    cursor: pointer;
    font-weight: bold;
  }
`;

export const CRUDButton = ({
  text,
  colorType = "black",
  hoverColorType,
  onClick,
  children,
}: CRUDButtonProps) => {
  return (
    <ColorButton
      sizeType={"smallRectangle"}
      fontSizeType={"mediumFont"}
      borderType={"modal"}
      colorType={colorType}
      hoverColorType={hoverColorType}
      onClick={onClick}
    >
      {text}
      {children}
    </ColorButton>
  );
};
