import styled from "styled-components";
import { CategoryListLabel } from "../../../components/Label/CategoryListLabel";
import { ColorBox } from "../../../components/common/ColorBox";
import { CloseButton } from "../../../components/Button/CloseButton";
import CloseIcon from "../../../assets/icons/ic_close.png";

interface footerDataProps {
  text: string;
  onClick: () => void;
}

interface onClickDataProps {
  onClickData: footerDataProps[];
}

export const CategoryListMain = ({ onClickData }: onClickDataProps) => {
  const CategoryListInfo = [
    { title: "생일", color: "#FF7F7F" },
    { title: "약속", color: "#7FC9FF" },
  ];

  return (
    <CategoryList>
      {CategoryListInfo.map((data) => (
        <CategoryListItem>
          <ItemButton onClick={onClickData[0].onClick}>
            <ColorBox color={data.color} />
            <CategoryListLabel text={data.title} />
          </ItemButton>
          <CloseButton icon={CloseIcon} onClick={onClickData[1].onClick} />
        </CategoryListItem>
      ))}
      <CategoryListItem>
        <ItemButton onClick={onClickData[0].onClick}>
          <CategoryListLabel text="+ 카테고리 추가" />
        </ItemButton>
      </CategoryListItem>
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const CategoryListItem = styled.li`
  height: 45px;
  display: flex;
  align-items: center;
  margin: 5px;
  border: 1px solid #cac8c8;
  border-radius: 5px;
  &:hover {
    background: #8d8d8d1f;
    cursor: pointer;
    font-weight: bold;
  }
`;
const ItemButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
