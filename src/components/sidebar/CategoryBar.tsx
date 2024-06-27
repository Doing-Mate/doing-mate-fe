import styled from "styled-components";
import { TitleLabel } from "../Label/TitleLabel";
import { Checkbox } from "../common/Checkbox";

export const CategoryBar = () => {
  return (
    <CategoryBarDiv>
      <TitleLabel text="카테고리" />
      <Checkbox colorType="#FF7F7F" text="생일" />
      <Checkbox colorType="#7FC9FF" text="약속" />
    </CategoryBarDiv>
  );
};

const CategoryBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;
