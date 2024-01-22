import { Label } from "../common/label";
import styled from "styled-components";

const StyledLabel = styled(Label)`
  font-weight: bold;
`;
export const MonthLabel = ({ text }) => {
  return <StyledLabel fontSizeType={"largeFont"}>{text}</StyledLabel>;
};
