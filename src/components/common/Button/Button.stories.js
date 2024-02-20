import { Button } from ".";

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

export const TestButton = {
  args: {
    sizeType: "largeRectangle",
    fontSizeType: "largeFont",
    borderType: "round",
    children: "TEST",
  },
};
