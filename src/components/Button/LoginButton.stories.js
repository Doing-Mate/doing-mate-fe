import { LoginButton } from "./LoginButton";
import GoogleIcon from "../../assets/icons/ic_google.png";
import GithubIcon from "../../assets/icons/ic_github.png";
import kaKaoIcon from "../../assets/icons/ic_kakao.png";

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
