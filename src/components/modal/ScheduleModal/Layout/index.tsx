import styled from "styled-components";

interface LayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const ScheduleModalLayout = ({
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
  width: 560px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: "WantedSansRegular";
  border-radius: 10px;
  box-shadow: 0px 10px 10px #00000042;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

const Footer = styled.footer`
  width: 100%;
  height: 80px;
`;
