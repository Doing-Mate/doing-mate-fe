import { useEffect } from "react";
import styled from "styled-components";
import { CategoryTitleLabel } from "../../components/Label/CategoryTitleLabel";
import { Checkbox } from "../../components/common/Checkbox";
import { PlusButton } from "../../components/Button/PlusButton";
import { useModalStateContext } from "../../hooks/useModalStateContext";
import { useModalModeContext } from "../../hooks/useModalModeContext";
import { CategoryListComponent } from "../../context/modalPageComponents";
import PlusIcon from "../../assets/icons/ic_plus.png";
import { getCategoryList } from "../../api/category";
import { useCategoryDataContext } from "../../hooks/useCategoryDataContext";

export const CategoryBar = () => {
  const { onModal, setOnModal } = useModalStateContext();
  const { setModalMode } = useModalModeContext();
  const { categoryList, setCategoryList } = useCategoryDataContext();

  const getAndSetDataList = async () => {
    const categoryList = await getCategoryList();

    setCategoryList(categoryList);
  };

  useEffect(() => {
    getAndSetDataList();
  }, []);

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
        <Checkbox key={item.id} colorType={item.color} text={item.title} />
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
