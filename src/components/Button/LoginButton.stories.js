import LoginButton from "./LoginButton";
import GoogleIcon from "../../icons/ic_google.png";
import GithubIcon from "../../icons/ic_github.png";
import kaKaoIcon from "../../icons/ic_kakao.png";

export default {
  component: LoginButton,
};

export const GoogleLoginButton = {
  args: {
    icon: GoogleIcon,
    text: "Google 로그인",
  },
};

export const GithubLoginButton = {
  args: {
    icon: GithubIcon,
    text: "Github 로그인",
  },
};

export const KaKaoLoginButton = {
  args: {
    icon: kaKaoIcon,
    text: "KaKao 로그인",
  },
};
