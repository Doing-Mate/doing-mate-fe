import styled from "styled-components";

interface ModalFooterProps {
  children?: React.ReactNode[];
}

export const CategoryModalFooter = ({ children }: ModalFooterProps) => {
  return <StyledFooter>{children}</StyledFooter>;
};

const StyledFooter = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  float: right;
  padding-right: 20px;
  padding-top: 10px;
`;
