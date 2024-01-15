import styled, { css } from "styled-components";

export const Checkbox = ({ backgroundColor = "white", children, ...props }) => {
  return (
    <StyledCheckBox
      type="checkbox"
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledCheckBox>
  );
};

const StyledCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: auto;
  ${({ backgroundColor }) =>
    css`
      accent-color: ${backgroundColor};
    `}
`;
