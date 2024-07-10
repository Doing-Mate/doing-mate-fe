import { MoveMonthButton } from "./MoveMonthButton";
import LeftIcon from "../../assets/icons/ic_left.png";
import RightIcon from "../../assets/icons/ic_right.png";

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
