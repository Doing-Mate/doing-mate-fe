import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledCategoryTitleInputText = styled(InputText)`
  width: 100%;
  margin-bottom: 10px;
`;

export const CategoryTitleInputText = () => {
  return (
    <StyledCategoryTitleInputText
      sizeType={"large"}
      fontSizeType={"mediumFont"}
      borderType={"round"}
      placeholder="카테고리"
    />
  );
};
