import styled from "styled-components";

interface LayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const CategoryModalLayout = ({
  header,
  footer,
  children,
}: LayoutProps) => {
  return (
    <BackgroundContainer>
      <Container>
        {header && <Header>{header}</Header>}
        <Main>{children}</Main>
        {footer && <Footer>{footer}</Footer>}
      </Container>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 350px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: "WantedSansRegular";
`;

const Header = styled.header`
  width: 100%;
  height: 50px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 80px;
`;