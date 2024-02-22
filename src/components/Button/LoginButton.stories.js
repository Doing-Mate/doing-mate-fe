import { LoginButton } from "./LoginButton";
import { GoogleIcon, GithubIcon, kaKaoIcon } from "../../constants/icon";

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
