import styled from "styled-components";
import { TitleLabel } from "../Label/TitleLabel";
import { Checkbox } from "../common/Checkbox";
import { PlusButton } from "../Button/PlusButton";
import PlusIcon from "../../icons/ic_plus.png";

export const CategoryBar = () => {
  return (
    <CategoryBarDiv>
      <CategoryTitleDiv>
        <TitleLabel text="카테고리" />
        <PlusButton icon={PlusIcon} />
      </CategoryTitleDiv>
      <Checkbox colorType="#FF7F7F" text="생일" />
      <Checkbox colorType="#7FC9FF" text="약속" />
    </CategoryBarDiv>
  );
};

const CategoryTitleDiv = styled.div`
  position: relative;
`;

const CategoryBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;
