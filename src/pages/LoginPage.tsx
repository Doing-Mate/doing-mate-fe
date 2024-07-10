import Layout from "../layout/Layout";
import styled from "styled-components";
import { Label } from "../components/common/Label";
import { LoginButton } from "../components/Button/LoginButton";
import { Logo } from "../components/common/Logo";
import GoogleIcon from "../assets/icons/ic_google.png";
import GithubIcon from "../assets/icons/ic_github.png";
import kaKaoIcon from "../assets/icons/ic_kakao.png";
import LoginLogo from "../assets/logos/logo_login.png";

export const LoginPage = () => {
  return (
    <Layout>
      <StyledLoginDiv>
        <Logo logoType="login" icon={LoginLogo} />
        <LoginLabel fontSizeType={"mediumFont"}>
          DoingMate와 함께 일정을 관리해보세요!
        </LoginLabel>
        <LoginButton
          icon={GoogleIcon}
          text="Google 로그인"
          borderType="round"
        />
        <LoginButton
          icon={GithubIcon}
          text="Github 로그인"
          backgroundColor="#000000"
          fontColor="white"
        />
        <LoginButton
          icon={kaKaoIcon}
          text="KaKao 로그인"
          backgroundColor="#FDDC3F"
        />
      </StyledLoginDiv>
    </Layout>
  );
};

const StyledLoginDiv = styled.div`
  width: 440px;
  height: 600px;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr;
  background-color: white;
  padding: 50px 0px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 5px 5px 4px #00000042;
`;

const LoginLabel = styled(Label)`
  margin: 5px auto;
`;
