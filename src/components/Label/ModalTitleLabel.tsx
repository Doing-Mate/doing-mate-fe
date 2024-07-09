import { Label } from "../common/Label";
import styled from "styled-components";

interface ModalTitleLabelProps {
  text: string;
}
const StyledLabel = styled(Label)`
  font-weight: bold;
  margin: 16px 20px;
`;

export const ModalTitleLabel = ({ text }: ModalTitleLabelProps) => {
  return <StyledLabel fontSizeType={"largeFont"}>{text}</StyledLabel>;
};
