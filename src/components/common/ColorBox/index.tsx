import styled, { css } from "styled-components";

interface ColorBoxProps {
  color: string;
}

export const ColorBox = ({ color }: ColorBoxProps) => {
  return <Container color={color} />;
};

const Container = styled.div`
  width: 25px;
  height: 25px;
  margin: 10px 15px;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}
`;
