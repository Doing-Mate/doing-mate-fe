import { Label } from "../common/Label";
import styled from "styled-components";

interface TitleLabelProps {
  text: string;
}

const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const TitleLabel = ({ text }: TitleLabelProps) => {
  return <StyledLabel fontSizeType={"extraLargeFont"}>{text}</StyledLabel>;
};