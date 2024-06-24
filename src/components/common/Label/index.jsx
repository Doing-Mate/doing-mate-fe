import styled, { css } from "styled-components";

export const Label = ({
  fontSizeType,
  backgroundColor = "transparent",
  children,
  ...props
}) => {
  return (
    <StyledLabel
      fontSizeType={fontSizeType}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ backgroundColor }) =>
    css`
      background-color: ${backgroundColor};
    `}
`;

const SmallFontSize = css`
  font-size: 12px;
`;

const MediumFontSize = css`
  font-size: 14px;
`;

const LargeFontSize = css`
  font-size: 18px;
`;

const ExtraLargeFontSize = css`
  font-size: 30px;
`;

const FontSize = {
  smallFont: SmallFontSize,
  mediumFont: MediumFontSize,
  largeFont: LargeFontSize,
  extraLargeFont: ExtraLargeFontSize,
};
