import { Icon } from ".";
import GoogleIcon from "../../../icons/ic_google.png";

export default {
  component: Icon,
  argTypes: {
    sizeType: {
      options: ["small", "medium", "large", "inherit"],
      control: { type: "radio" },
    },
  },
};

export const TestIcon = {
  args: {
    sizeType: "small",
    src: GoogleIcon,
  },
};
