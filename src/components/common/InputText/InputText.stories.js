import { InputText } from ".";

export default {
  component: InputText,
  argTypes: {
    sizeType: {
      options: ["small", "medium", "large"],
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

export const TestInputText = {
  args: {
    sizeType: "small",
    fontSizeType: "smallFont",
    borderType: "round",
    placeholder: "할 일 제목",
  },
};
