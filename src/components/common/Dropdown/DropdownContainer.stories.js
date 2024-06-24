import { DropdownContainer } from "./DropdownContainer";

const Repetition_TEXT = {
  HOUR: "1시간마다 반복",
  DAY: "하루마다 반복",
  WEEK: "일주일마다 반복",
  MONTH: "한달마다 반복",
};

const Category_TEXT = {
  생일: "생일",
  회의: "회의",
  약속: "약속",
  데이트: "데이트",
};

export default {
  component: DropdownContainer,
  argTypes: {},
};

export const CategoryDropdown = {
  args: {
    title: "카테고리",
    dataList: Category_TEXT,
  },
};

export const RepetitionDropdown = {
  args: {
    title: "반복 설정",
    dataList: Repetition_TEXT,
  },
};
