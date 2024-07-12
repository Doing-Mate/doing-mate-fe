import { ScheduleDataProps } from "./dataInterface";

export interface ModalType {
  modelType: "schedule" | "category";
}

export interface ModalPropsType {
  propsType: "detail" | "modify" | "add" | "list" | "item";
}

export interface ModalProps {
  modelType: "schedule" | "category";
  propsType: "detail" | "modify" | "add" | "list" | "item";
  headerText: string;
  footerButtons: React.ReactNode[] | null;
  mainDisabled: boolean;
  alert: boolean;
  data?: ScheduleDataProps;
}

const BasicComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
};

const ScheduleDetailComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "일정 상세보기",
  footerButtons: [],
  mainDisabled: false,
  alert: false,
};

const ScheduleModifyComponent: ModalProps = {
  modelType: "schedule",
  propsType: "modify",
  headerText: "일정 수정하기",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
};

const ScheduleAddComponent: ModalProps = {
  modelType: "schedule",
  propsType: "add",
  headerText: "일정 추가하기",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
};

const ScheduleDeleteComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "일정 상세보기",
  footerButtons: [],
  mainDisabled: false,
  alert: true,
};

const CategoryListComponent: ModalProps = {
  modelType: "category",
  propsType: "list",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
};

const CategoryItemComponent: ModalProps = {
  modelType: "category",
  propsType: "item",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
};

const CategoryDeleteComponent: ModalProps = {
  modelType: "category",
  propsType: "list",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: true,
};

export {
  BasicComponent,
  ScheduleDetailComponent,
  ScheduleModifyComponent,
  ScheduleAddComponent,
  ScheduleDeleteComponent,
  CategoryListComponent,
  CategoryItemComponent,
  CategoryDeleteComponent,
};
