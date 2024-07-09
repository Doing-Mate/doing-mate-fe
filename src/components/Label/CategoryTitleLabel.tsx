import { Label } from "../common/Label";
import styled from "styled-components";

interface CategoryTitleLabelProps {
  text: string;
}

const StyledLabel = styled(Label)`
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 15px;
`;

export const CategoryTitleLabel = ({ text }: CategoryTitleLabelProps) => {
  return <StyledLabel fontSizeType={"extraLargeFont"}>{text}</StyledLabel>;
};
