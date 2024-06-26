import styled from "styled-components";

interface LayoutProps {
  header?: React.ReactNode;
  sideBar?: React.ReactNode;
  children: React.ReactNode;
}

const Layout = ({ header, sideBar, children }: LayoutProps) => {
  return (
    <Container>
      {header && <Header>{header}</Header>}
      <Contents>
        {sideBar && <SideBar>{sideBar}</SideBar>}
        <Main>{children}</Main>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 80px;
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
`;

const SideBar = styled.nav`
  display: flex;
  width: 250px;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(235, 186, 199, 1) 0%,
    rgba(189, 211, 246, 1) 100%
  );
`;

export default Layout;
