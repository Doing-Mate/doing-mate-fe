import styled from "styled-components";
import { ImportantLevelBar } from "./ImportantLevelBar";
import { CategoryBar } from "./CategoryBar";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <ImportantLevelBar />
      <CategoryBar />
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px dashed black;
`;
