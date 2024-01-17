import styled, { css } from "styled-components";

export const Button = ({
  buttonType = "basic",
  sizeType,
  fontSizeType,
  borderType,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      buttonType={buttonType}
      sizeType={sizeType}
      fontSizeType={fontSizeType}
      borderType={borderType}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  ${({ buttonType }) => ButtonType[buttonType]}
  ${({ sizeType }) => Size[sizeType]}
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ borderType }) => Border[borderType]}
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
  width: 60px;
  height: 30px;
`;

const MediumRectangleSize = css`
  width: 100px;
  height: 33px;
`;

const LargeRectangleSize = css`
  width: 260px;
  height: 55px;
`;

const SmallSquareSize = css`
  width: 30px;
  height: 30px;
`;

const MediumSquareSize = css`
  width: 45px;
  height: 45px;
`;

const LargeSquareSize = css`
  width: 80px;
  height: 80px;
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
  font-size: 12px;
`;

const MediumFontSize = css`
  font-size: 14px;
`;

const LargeFontSize = css`
  font-size: 16px;
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
  border-radius: 5px;
`;

const Border = {
  none: NoneType,
  square: SquareType,
  round: RoundType,
};
