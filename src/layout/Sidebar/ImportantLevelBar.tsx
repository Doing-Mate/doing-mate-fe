import styled from "styled-components";
import { CategoryTitleLabel } from "../../components/Label/CategoryTitleLabel";
import { Checkbox } from "../../components/common/Checkbox";
import { Icon } from "../../components/common/Icon";
import StarIcon from "../../assets/icons/ic_star.png";

interface ImportantLevelBarProps {
  handleCheckImportance: (id: string) => void;
}

export const ImportantLevelBar = ({
  handleCheckImportance,
}: ImportantLevelBarProps) => {
  return (
    <ImportantLevelBarDiv key={"leverbar"}>
      <CategoryTitleLabel text="중요도" />
      <ImportantLevelItem num={5} onclick={handleCheckImportance} />
      <ImportantLevelItem num={4} onclick={handleCheckImportance} />
      <ImportantLevelItem num={3} onclick={handleCheckImportance} />
      <ImportantLevelItem num={2} onclick={handleCheckImportance} />
      <ImportantLevelItem num={1} onclick={handleCheckImportance} />
    </ImportantLevelBarDiv>
  );
};

interface ImportantLevelItemProps {
  num: number;
  onclick: (id: string) => void;
}

const ImportantLevelItem = ({ num, onclick }: ImportantLevelItemProps) => {
  return (
    <ImportantLevelItemDiv>
      <Checkbox
        key={"starLevel_" + num}
        onChange={() => onclick("starLevel_" + num)}
      />
      <StarLevel num={num} />
    </ImportantLevelItemDiv>
  );
};

interface StarLevelProps {
  num: number;
}

const StarLevel = ({ num }: StarLevelProps) => {
  return (
    <StarLevelDiv key={"star" + num}>
      {new Array(num).fill(0).map((item, index) => (
        <Icon key={num + "_" + index} sizeType="small" icon={StarIcon} />
      ))}
    </StarLevelDiv>
  );
};

const StarLevelDiv = styled.div`
  margin: auto 0px;
`;

const ImportantLevelItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const ImportantLevelBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  border-bottom: 2px dashed black;
`;
