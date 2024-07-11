import styled from "styled-components";
import { CategoryTitleLabel } from "../../components/Label/CategoryTitleLabel";
import { Checkbox } from "../../components/common/Checkbox";
import { Icon } from "../../components/common/Icon";
import StarIcon from "../../assets/icons/ic_star.png";

export const ImportantLevelBar = () => {
  return (
    <ImportantLevelBarDiv key={"leverbar"}>
      <CategoryTitleLabel text="중요도" />
      <ImportantLevelItem num={5} />
      <ImportantLevelItem num={4} />
      <ImportantLevelItem num={3} />
      <ImportantLevelItem num={2} />
      <ImportantLevelItem num={1} />
    </ImportantLevelBarDiv>
  );
};

interface StarLevelProps {
  num: number;
}

const ImportantLevelItem = ({ num }: StarLevelProps) => {
  return (
    <ImportantLevelItemDiv>
      <Checkbox key={"starLevel_" + num} />
      <StarLevel num={num} />
    </ImportantLevelItemDiv>
  );
};

const StarLevel = ({ num }: StarLevelProps) => {
  return (
    <StarLevelDiv key={"star" + num}>
      {new Array(num).fill(0).map(() => (
        <Icon sizeType="small" icon={StarIcon} />
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
