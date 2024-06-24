import { Label } from "../common/Label";
import styled from "styled-components";

interface MonthLabelProps {
  text: string;
}
const StyledLabel = styled(Label)`
  font-weight: bold;
`;
export const MonthLabel = ({ text }: MonthLabelProps) => {
  return <StyledLabel fontSizeType={"largeFont"}>{text}</StyledLabel>;
};
