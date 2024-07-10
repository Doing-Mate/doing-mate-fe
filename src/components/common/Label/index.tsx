import styled, { css } from "styled-components";

interface LabelProps {
  fontSizeType: "smallFont" | "mediumFont" | "largeFont" | "extraLargeFont";
  backgroundColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Label = ({
  fontSizeType,
  backgroundColor = "transparent",
  children,
  onClick,
  ...props
}: LabelProps) => {
  return (
    <StyledLabel
      fontSizeType={fontSizeType}
      backgroundColor={backgroundColor}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<LabelProps>`
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ backgroundColor }) =>
    css`
      background-color: ${backgroundColor};
    `}
`;

const SmallFontSize = css`
  font-size: 13px;
`;

const MediumFontSize = css`
  font-size: 15px;
`;

const LargeFontSize = css`
  font-size: 18px;
`;

const ExtraLargeFontSize = css`
  font-size: 20px;
`;

const FontSize = {
  smallFont: SmallFontSize,
  mediumFont: MediumFontSize,
  largeFont: LargeFontSize,
  extraLargeFont: ExtraLargeFontSize,
};
