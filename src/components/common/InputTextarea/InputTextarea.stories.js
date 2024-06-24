import { InputTextarea } from ".";

export default {
  component: InputTextarea,
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

export const TestInputTextarea = {
  args: {
    sizeType: "small",
    fontSizeType: "smallFont",
    borderType: "round",
    placeholder: "메모 추가",
  },
};
