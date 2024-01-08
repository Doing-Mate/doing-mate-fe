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
      props={props}
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

const Size = {
  smallRectangle: SmallRectangleSize,
  mediumRectangle: MediumRectangleSize,
  largeRectangle: LargeRectangleSize,
  smallSquare: SmallSquareSize,
  mediumSquare: MediumSquareSize,
  largeSquare: LargeSquareSize,
};

const SmallRectangleSize = css`
  width: 87px;
  height: 43px;
`;

const MediumRectangleSize = css`
  width: 156px;
  height: 60px;
`;

const LargeRectangleSize = css`
  width: 270px;
  height: 56px;
`;

const SmallSquareSize = css`
  width: 87px;
  height: 43px;
`;

const MediumSquareSize = css`
  width: 156px;
  height: 60px;
`;

const LargeSquareSize = css`
  width: 270px;
  height: 56px;
`;

const FontSize = {
  smallFont: SmallFontSize,
  mediumFont: MediumFontSize,
  largeFont: LargeFontSize,
};

const SmallFontSize = css`
  font-size: 14px;
`;

const MediumFontSize = css`
  font-size: 16px;
`;

const LargeFontSize = css`
  font-size: 20px;
`;

const Border = {
  none: NoneType,
  square: SquareType,
  round: RoundType,
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

export default Button;
