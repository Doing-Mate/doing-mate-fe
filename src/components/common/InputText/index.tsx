import styled, { css } from "styled-components";

interface InputTextProps {
  sizeType: "small" | "medium" | "large";
  fontSizeType: "smallFont" | "mediumFont" | "largeFont";
  borderType: "none" | "square" | "round";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  sizeType,
  fontSizeType,
  borderType,
  placeholder,
  disabled = false,
  required = false,
  value,
  onChange,
  ...props
}: InputTextProps) => {
  return (
    <StyledInputText
      type="text"
      sizeType={sizeType}
      fontSizeType={fontSizeType}
      borderType={borderType}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      value={value}
      onChange={onChange}
      {...props}
    ></StyledInputText>
  );
};

const StyledInputText = styled.input<InputTextProps>`
  padding: 0px 10px;
  ${({ sizeType }) => Size[sizeType]}
  ${({ fontSizeType }) => FontSize[fontSizeType]}
  ${({ borderType }) => Border[borderType]}
`;

const SmallSize = css`
  height: 30px;
`;

const MediumSize = css`
  height: 35px;
`;

const LargeSize = css`
  height: 50px;
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
  font-size: 15px;
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
  border-radius: 5px;
`;

const Border = {
  none: NoneType,
  square: SquareType,
  round: RoundType,
};
