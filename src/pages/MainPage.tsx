import Layout from "../layout/Layout";
import styled from "styled-components";
import { Header } from "../layout/Header";
import { SideBar } from "../layout/Sidebar";
import { Main } from "../layout/Main";
import { ModalContextProvider } from "../context/modalContext";
import { DataContextProvider } from "../context/dataContext";
import { ModalContainer } from "../components/modal/ModalContainer";
import Auth from "../service/auth";
import { User } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { KakaoAuth } from "../service/KakaoAuth";

interface PageProps {
  auth: Auth;
}

export const MainPage = ({ auth }: PageProps) => {
  const { onLogoutWithKaKao } = KakaoAuth();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    auth.logout();
  }, [auth]);

  useEffect(() => {
    auth.onAuthChange((user: User) => {
      !user && location.state.type !== "Kakao" && navigate("/");
    });
  });

  const location = useLocation();
  return (
    <ModalContextProvider>
      <DataContextProvider>
        <Layout
          header={
            <Header
              userName={
                location.state.name !== null
                  ? location.state.name
                  : location.state.email
              }
              onLogout={
                location.state.type !== "Kakao"
                  ? onLogout
                  : () => onLogoutWithKaKao(location.state.token)
              }
            />
          }
          sideBar={<SideBar uid={location.state.uid} />}
        >
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
