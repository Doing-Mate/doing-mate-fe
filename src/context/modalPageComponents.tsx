import { ScheduleDataProps, BasicScheduleData } from "./dataInterface";

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
  data: BasicScheduleData,
};

const ScheduleDetailComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "일정 상세보기",
  footerButtons: [],
  mainDisabled: false,
  alert: false,
  data: BasicScheduleData,
};

const ScheduleModifyComponent: ModalProps = {
  modelType: "schedule",
  propsType: "modify",
  headerText: "일정 수정하기",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: BasicScheduleData,
};

const ScheduleAddComponent: ModalProps = {
  modelType: "schedule",
  propsType: "add",
  headerText: "일정 추가하기",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: BasicScheduleData,
};

const ScheduleDeleteComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "일정 상세보기",
  footerButtons: [],
  mainDisabled: false,
  alert: true,
  data: BasicScheduleData,
};

const CategoryListComponent: ModalProps = {
  modelType: "category",
  propsType: "list",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: BasicScheduleData,
};

const CategoryItemComponent: ModalProps = {
  modelType: "category",
  propsType: "item",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: BasicScheduleData,
};

const CategoryDeleteComponent: ModalProps = {
  modelType: "category",
  propsType: "list",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: true,
  data: BasicScheduleData,
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
