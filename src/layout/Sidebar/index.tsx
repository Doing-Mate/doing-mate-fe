import styled from "styled-components";
import { ImportantLevelBar } from "./ImportantLevelBar";
import { CategoryBar } from "./CategoryBar";
import { useFilteringData } from "../../hooks/useFilteringData";

export const SideBar = () => {
  const { handleCheckbox, handleCheckImportance } = useFilteringData();
  return (
    <StyledSideBar>
      <ImportantLevelBar handleCheckImportance={handleCheckImportance} />
      <CategoryBar handleCheckbox={handleCheckbox} />
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px dashed black;
`;
