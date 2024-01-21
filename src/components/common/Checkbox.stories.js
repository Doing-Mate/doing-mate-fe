import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  argTypes: {
    colorType: {
      control: { type: "color" },
    },
  },
};

export const TestCheckbox = {
  args: {},
};
