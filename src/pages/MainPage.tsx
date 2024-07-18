import Layout from "../layout/Layout";
import styled from "styled-components";
import { Header } from "../layout/Header";
import { SideBar } from "../layout/Sidebar";
import { Main } from "../layout/Main";
import { ModalContextProvider } from "../context/modalContext";
import { DataContextProvider } from "../context/dataContext";
import { ModalContainer } from "../components/modal/ModalContainer";

export const MainPage = () => {
  return (
    <ModalContextProvider>
      <DataContextProvider>
        <Layout header={<Header />} sideBar={<SideBar />}>
          <StyledMainDiv>
            <Main />
          </StyledMainDiv>
        </Layout>
        <ModalContainer />
      </DataContextProvider>
    </ModalContextProvider>
  );
};

const StyledMainDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;
