import styled from "styled-components";
import { CategoryTitleLabel } from "../../components/Label/CategoryTitleLabel";
import { Checkbox } from "../../components/common/Checkbox";
import { PlusButton } from "../../components/Button/PlusButton";
import { useModalStateContext } from "../../hooks/useContext/useModalStateContext";
import { useModalModeContext } from "../../hooks/useContext/useModalModeContext";
import { CategoryListComponent } from "../../context/modalPageComponents";
import PlusIcon from "../../assets/icons/ic_plus.png";
import { useCategoryDataContext } from "../../hooks/useContext/useCategoryDataContext";

interface CategoryBarProps {
  handleCheckbox: (id: string, value: boolean) => void;
}

export const CategoryBar = ({ handleCheckbox }: CategoryBarProps) => {
  const { onModal, setOnModal } = useModalStateContext();
  const { setModalMode } = useModalModeContext();
  const { categoryList } = useCategoryDataContext();

  const handleModal = () => {
    setModalMode(CategoryListComponent);
    setOnModal(!onModal);
  };

  return (
    <CategoryBarDiv>
      <CategoryTitleDiv>
        <CategoryTitleLabel text="카테고리" />
        <PlusButton icon={PlusIcon} onClick={handleModal} />
      </CategoryTitleDiv>
      {categoryList.map((item) => (
        <Checkbox
          key={item.id}
          colorType={item.color}
          text={item.title}
          onChange={(value) => handleCheckbox(item.id, value)}
        />
      ))}
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
