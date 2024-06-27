import styled, { css } from "styled-components";

interface IconProps {
  sizeType: "small" | "medium" | "large" | "inherit";
  icon: string;
  children?: React.ReactNode;
}

export const Icon = ({ sizeType, icon, children, ...props }: IconProps) => {
  return (
    <StyledIcon sizeType={sizeType} src={icon} {...props}>
      {children}
    </StyledIcon>
  );
};

type StyledIconProps = Omit<IconProps, "icon">;

const StyledIcon = styled.img<StyledIconProps>`
  margin: auto;
  ${({ sizeType }) => Size[sizeType]}
`;

const SmallSize = css`
  width: 25px;
  height: 25px;
`;

const MediumSize = css`
  width: 40px;
  height: 40px;
`;

const LargeSize = css`
  width: 60px;
  height: 60px;
`;

const InheritSize = css`
  width: inherit;
  height: inherit;
`;

const Size = {
  small: SmallSize,
  medium: MediumSize,
  large: LargeSize,
  inherit: InheritSize,
};
