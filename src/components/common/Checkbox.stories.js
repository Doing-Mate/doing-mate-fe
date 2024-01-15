import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
};

export const TestCheckbox = {
  args: {},
};
