import styled, { css } from "styled-components";

const Button = ({
  sizeType,
  fontSizeType,
  borderType,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
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
  ${({ sizeType }) => Size[sizeType]}
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ borderType }) => Border[borderType]}
`;

const SmallRectangleSize = css`
  width: 60px;
  height: 30px;
`;

const MediumRectangleSize = css`
  width: 90px;
  height: 33px;
`;

const LargeRectangleSize = css`
  width: 300px;
  height: 55px;
`;

const SmallSquareSize = css`
  width: 40px;
  height: 40px;
`;

const MediumSquareSize = css`
  width: 60px;
  height: 60px;
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

export default Button;
