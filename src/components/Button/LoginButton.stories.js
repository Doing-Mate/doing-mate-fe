import LoginButton from "./LoginButton";
import testIcon from "../../icons/ic_user.png";

export default {
  component: LoginButton,
};

export const TestLoginButton = {
  args: {
    icon: { testIcon },
    text: "카카오톡으로 로그인",
  },
};
