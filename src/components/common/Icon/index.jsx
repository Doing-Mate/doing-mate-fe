import styled, { css } from "styled-components";

export const Icon = ({ sizeType, icon, children, ...props }) => {
  return (
    <StyledIcon sizeType={sizeType} src={icon} {...props}>
      {children}
    </StyledIcon>
  );
};

const StyledIcon = styled.img`
  margin: auto;
  ${({ sizeType }) => Size[sizeType]}
`;

const SmallSize = css`
  width: 30px;
  height: 30px;
`;

const MediumSize = css`
  width: 45px;
  height: 45px;
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
