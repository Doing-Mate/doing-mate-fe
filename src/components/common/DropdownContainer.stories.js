import { DropdownContainer } from "./DropdownContainer";

export default {
  component: DropdownContainer,
  argTypes: {},
};

export const CategoryDropdown = {
  args: {
    title: "카테고리",
    dataList: ["생일", "회의", "약속", "데이트"],
  },
};

export const RepetitionDropdown = {
  args: {
    title: "반복 설정",
    dataList: [
      "1시간마다 반복",
      "하루마다 반복",
      "일주일마다 반복",
      "한달마다 반복",
    ],
  },
};
