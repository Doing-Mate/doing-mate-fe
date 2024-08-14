import styled, { css } from "styled-components";

interface ButtonProps {
  buttonType?: "basic" | "dropdown";
  sizeType:
    | "smallRectangle"
    | "mediumRectangle"
    | "largeRectangle"
    | "smallSquare"
    | "mediumSquare"
    | "largeSquare";
  fontSizeType: "smallFont" | "mediumFont" | "largeFont";
  borderType: "none" | "square" | "round" | "roundNone" | "modal";
  backgroundColor?: string;
  fontColor?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({
  buttonType,
  sizeType,
  fontSizeType,
  borderType,
  backgroundColor = "transparent",
  fontColor = "black",
  disabled = false,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      buttonType={buttonType}
      sizeType={sizeType}
      fontSizeType={fontSizeType}
      borderType={borderType}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  ${({ buttonType = "basic" }) => ButtonType[buttonType]}
  ${({ sizeType }) => Size[sizeType]}
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ borderType }) => Border[borderType]}
  ${({ backgroundColor }) =>
    css`
      background-color: ${backgroundColor};
    `}
  ${({ fontColor }) =>
    css`
      color: ${fontColor};
    `}
`;

const BasicButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownButton = css`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`;

const ButtonType = {
  basic: BasicButton,
  dropdown: DropdownButton,
};

const SmallRectangleSize = css`
  width: 110px;
  height: 35px;
`;

const MediumRectangleSize = css`
  width: 150px;
  height: 35px;
`;

const LargeRectangleSize = css`
  width: 360px;
  height: 65.5px;
`;

const SmallSquareSize = css`
  width: 22px;
  height: 22px;
`;

const MediumSquareSize = css`
  width: 35px;
  height: 35px;
`;

const LargeSquareSize = css`
  width: 50px;
  height: 50px;
`;

const Size = {
  smallRectangle: SmallRectangleSize,
  mediumRectangle: MediumRectangleSize,
  largeRectangle: LargeRectangleSize,
  smallSquare: SmallSquareSize,
  mediumSquare: MediumSquareSize,
  largeSquare: LargeSquareSize,
};

const SmallFontSize = css`
  font-size: 13px;
`;

const MediumFontSize = css`
  font-size: 14px;
`;

const LargeFontSize = css`
  font-size: 18px;
`;

const FontSize = {
  smallFont: SmallFontSize,
  mediumFont: MediumFontSize,
  largeFont: LargeFontSize,
};

const NoneType = css`
  border: 0px;
`;

const SquareType = css`
  border: 1px solid black;
`;

const RoundType = css`
  border: 1px solid black;
  border-radius: 15px;
`;

const RoundNoneType = css`
  border: 0px;
  border-radius: 15px;
`;

const ModalType = css`
  border: 1px solid black;
  border-radius: 5px;
`;

const Border = {
  none: NoneType,
  square: SquareType,
  round: RoundType,
  roundNone: RoundNoneType,
  modal: ModalType,
};
