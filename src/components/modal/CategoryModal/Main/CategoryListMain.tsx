import styled from "styled-components";
import { CategoryListLabel } from "../../../Label/CategoryListLabel";
import { ColorBox } from "../../../common/ColorBox";
import { CloseButton } from "../../../Button/CloseButton";
import CloseIcon from "../../../../assets/icons/ic_close.png";
import { CategoryDataProps } from "../../../../context/dataInterface";
import {
  CategoryItemComponent,
  CategoryDeleteComponent,
} from "../../../../context/modalPageComponents";

interface footerDataProps {
  text: string;
  onClick: () => void;
}

interface onClickDataProps {
  data?: CategoryDataProps[] | undefined;
  onClickData: footerDataProps[];
}

export const CategoryListMain = ({ data, onClickData }: onClickDataProps) => {
  const itemClick = (item?: CategoryDataProps) => {
    CategoryItemComponent.data = item;
    onClickData[0].onClick();
  };

  const deleteItem = (item?: CategoryDataProps) => {
    CategoryDeleteComponent.data = item;
    onClickData[1].onClick();
  };
  return (
    <CategoryList>
      {data?.map((item) => (
        <CategoryListItem>
          <ItemButton key={item.id} onClick={() => itemClick(item)}>
            <ColorBox color={item.color} />
            <CategoryListLabel text={item.title} />
          </ItemButton>
          <CloseButton icon={CloseIcon} onClick={() => deleteItem(item)} />
        </CategoryListItem>
      ))}
      <CategoryListItem>
        <ItemButton onClick={() => itemClick()}>
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
  border-radius: 7px;
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
