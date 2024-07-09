import { Label } from "../common/Label";
import styled from "styled-components";

interface CategoryListLabelProps {
  text: string;
}

const StyledLabel = styled(Label)`
  margin: auto;
`;

export const CategoryListLabel = ({ text }: CategoryListLabelProps) => {
  return <StyledLabel fontSizeType={"largeFont"}>{text}</StyledLabel>;
};
