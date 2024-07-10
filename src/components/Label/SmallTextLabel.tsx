import { Label } from "../common/Label";
import styled from "styled-components";

interface SmallTextLabelProps {
  text: string;
}

const StyledLabel = styled(Label)`
  margin: auto;
`;

export const SmallTextLabel = ({ text }: SmallTextLabelProps) => {
  return <StyledLabel fontSizeType={"smallFont"}>{text}</StyledLabel>;
};
