import { Label } from "../common/label";
import styled from "styled-components";

const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const TitleLabel = ({ text }) => {
  return <StyledLabel fontSizeType={"extraLargeFont"}>{text}</StyledLabel>;
};
