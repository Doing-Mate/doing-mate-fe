import { DropdownList } from "./DropdownList";

const Repetition_TEXT = {
  HOUR: "1시간마다 반복",
  DAY: "하루마다 반복",
  WEEK: "일주일마다 반복",
  MONTH: "한달마다 반복",
};

export default {
  component: DropdownList,
  argTypes: {},
};

export const TestDropdownList = {
  args: {
    dataList: Repetition_TEXT,
  },
};
