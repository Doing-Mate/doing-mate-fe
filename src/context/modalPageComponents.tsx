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
  data?: object;
}

const BasicComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: [],
};

const ScheduleDetailComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "일정 상세보기",
  footerButtons: [],
  mainDisabled: false,
  alert: false,
  data: [],
};

const ScheduleModifyComponent: ModalProps = {
  modelType: "schedule",
  propsType: "modify",
  headerText: "일정 수정하기",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: [],
};

const ScheduleAddComponent: ModalProps = {
  modelType: "schedule",
  propsType: "add",
  headerText: "일정 추가하기",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: [],
};

const ScheduleDeleteComponent: ModalProps = {
  modelType: "schedule",
  propsType: "detail",
  headerText: "일정 상세보기",
  footerButtons: [],
  mainDisabled: false,
  alert: true,
  data: [],
};

const CategoryListComponent: ModalProps = {
  modelType: "category",
  propsType: "list",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: [],
};

const CategoryItemComponent: ModalProps = {
  modelType: "category",
  propsType: "item",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: false,
  data: [],
};

const CategoryDeleteComponent: ModalProps = {
  modelType: "category",
  propsType: "list",
  headerText: "카테고리 추가",
  footerButtons: [],
  mainDisabled: true,
  alert: true,
  data: [],
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
