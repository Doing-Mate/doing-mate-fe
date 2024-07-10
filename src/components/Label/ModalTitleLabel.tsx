import { Label } from "../common/Label";
import styled from "styled-components";

interface ModalTitleLabelProps {
  text: string;
}
const StyledLabel = styled(Label)`
  font-weight: bold;
  margin: 22px 25px;
`;

export const ModalTitleLabel = ({ text }: ModalTitleLabelProps) => {
  return <StyledLabel fontSizeType={"largeFont"}>{text}</StyledLabel>;
};
