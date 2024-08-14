import { Label } from "../common/Label";
import styled from "styled-components";

interface UserNameLabelProps {
  text: string;
}
const StyledLabel = styled(Label)`
  font-weight: bold;
  margin: 33px 0px;
  float: right;
`;

export const UserNameLabel = ({ text }: UserNameLabelProps) => {
  return <StyledLabel fontSizeType={"extraLargeFont"}>{text}</StyledLabel>;
};
