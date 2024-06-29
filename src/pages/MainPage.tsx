import Layout from "../layout";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { SideBar } from "../components/sidebar/SideBar";
import { Calendar } from "../components/common/Calendar";

export const MainPage = () => {
  return (
    <Layout header={<Header />} sideBar={<SideBar />}>
      <StyledMainDiv>
        <Calendar />
      </StyledMainDiv>
    </Layout>
  );
};

const StyledMainDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;
