import { Label } from "../common/Label";
import styled from "styled-components";

interface CategoryLabelProps {
  text: string;
}

const StyledLabel = styled(Label)`
  font-weight: bold;
`;

export const CategoryLabel = ({ text }: CategoryLabelProps) => {
  return <StyledLabel fontSizeType={"mediumFont"}>{text}</StyledLabel>;
};
