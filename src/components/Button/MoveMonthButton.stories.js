import MoveMonthButton from "./MoveMonthButton";
import LeftIcon from "../../icons/ic_left.png";
import RightIcon from "../../icons/ic_right.png";

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
