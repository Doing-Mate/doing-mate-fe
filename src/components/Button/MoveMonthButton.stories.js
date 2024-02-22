import { MoveMonthButton } from "./MoveMonthButton";
import { LeftIcon, RightIcon } from "../../constants/icon";

export default {
  component: MoveMonthButton,
};

export const PreviousButton = {
  args: {
    icon: LeftIcon,
  },
};

export const NextButton = {
  args: {
    icon: RightIcon,
  },
};
