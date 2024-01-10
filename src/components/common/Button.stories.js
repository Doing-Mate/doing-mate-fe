import Button from "./Button";
import testIcon from "../../icons/ic_user.png";

export default {
  component: Button,
  argTypes: {
    sizeType: {
      options: [
        "smallRectangle",
        "mediumRectangle",
        "largeRectangle",
        "smallSquare",
        "mediumSquare",
        "largeSquare",
      ],
      control: { type: "radio" },
    },
    fontSizeType: {
      options: ["smallFont", "mediumFont", "largeFont"],
      control: { type: "radio" },
    },
    borderType: {
      options: ["none", "square", "round"],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: "boolean",
    },
  },
};

export const LoginButton = {
  args: {
    sizeType: "largeRectangle",
    fontSizeType: "largeFont",
    borderType: "round",
    children: "카카오톡으로 로그인",
  },
};

export const CreateTodoButton = {
  args: {
    sizeType: "mediumRectangle",
    fontSizeType: "mediumFont",
    borderType: "round",
    children: "+ Todo",
  },
};

export const CRUDButton = {
  args: {
    sizeType: "mediumRectangle",
    fontSizeType: "mediumFont",
    borderType: "round",
    children: "수정",
  },
};

export const MoveMonthButton = {
  args: {
    sizeType: "smallSquare",
    fontSizeType: "smallFont",
    borderType: "round",
    icon: { testIcon },
  },
};

export const SecretaryButton = {
  args: {
    sizeType: "largeSquare",
    fontSizeType: "largeFont",
    borderType: "none",
    icon: { testIcon },
  },
};

export const SmallRectButton = {
  args: {
    sizeType: "smallRectangle",
    fontSizeType: "smallFont",
    borderType: "round",
    children: "Today",
  },
};
