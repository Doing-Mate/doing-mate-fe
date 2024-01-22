import { Label } from "./label";

export default {
  component: Label,
  argTypes: {
    fontSizeType: {
      options: ["smallFont", "mediumFont", "largeFont", "extraLargeFont"],
      control: { type: "radio" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
  },
};

export const TestLabel = {
  args: {
    fontSizeType: "largeFont",
    children: "TEST",
  },
};
