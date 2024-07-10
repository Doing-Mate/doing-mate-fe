import styled, { css } from "styled-components";

interface InputTextareaProps {
  sizeType: "small" | "medium" | "large";
  fontSizeType: "smallFont" | "mediumFont" | "largeFont";
  borderType: "none" | "square" | "round";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
}

export const InputTextarea = ({
  sizeType,
  fontSizeType,
  borderType,
  placeholder,
  disabled = false,
  required = false,
  value,
  ...props
}: InputTextareaProps) => {
  return (
    <StyledInputTextarea
      sizeType={sizeType}
      fontSizeType={fontSizeType}
      borderType={borderType}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      value={value}
      {...props}
    ></StyledInputTextarea>
  );
};

const StyledInputTextarea = styled.textarea<InputTextareaProps>`
  padding: 10px;
  line-height: 150%;
  ${({ sizeType }) => Size[sizeType]}
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ borderType }) => Border[borderType]}
`;

const SmallSize = css`
  height: 30px;
`;

const MediumSize = css`
  height: 200px;
`;

const LargeSize = css`
  height: 200px;
`;

const Size = {
  small: SmallSize,
  medium: MediumSize,
  large: LargeSize,
};

const SmallFontSize = css`
  font-size: 13px;
`;

const MediumFontSize = css`
  font-size: 14px;
`;

const LargeFontSize = css`
  font-size: 15px;
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
