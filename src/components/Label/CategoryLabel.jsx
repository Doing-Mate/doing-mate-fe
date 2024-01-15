import { Label } from "../common/label";
import styled from "styled-components";

const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const CategoryLabel = ({ text }) => {
  return <StyledLabel fontSizeType={"smallFont"}>{text}</StyledLabel>;
};
