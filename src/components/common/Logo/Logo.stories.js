import { Logo } from "./";
import MainLogo from "../../../assets/logos/logo_main.png";
import LoginLogo from "../../../assets/logos/logo_login.png";

export default {
  component: Logo,
};

export const TestMainLogo = {
  args: {
    logoType: "main",
    icon: MainLogo,
  },
};

export const TestLoginLogo = {
  args: {
    logoType: "login",
    icon: LoginLogo,
  },
};
