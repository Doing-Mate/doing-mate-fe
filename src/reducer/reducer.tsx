import {
  ModalProps,
  ScheduleDetailComponent,
  ScheduleModifyComponent,
  ScheduleAddComponent,
  ScheduleDeleteComponent,
  CategoryListComponent,
  CategoryItemComponent,
  CategoryDeleteComponent,
} from "../context/modalPageComponents";

interface Action {
  type: string;
}

const reducer = (state: ModalProps, action: Action): ModalProps => {
  switch (action.type) {
    case "Detail":
      return ScheduleDetailComponent;
    case "Modify":
      return ScheduleModifyComponent;
    case "Add":
      return ScheduleAddComponent;
    case "Delete":
      return ScheduleDeleteComponent;
    case "List":
      return CategoryListComponent;
    case "Item":
      return CategoryItemComponent;
    case "CategoryDelete":
      return CategoryDeleteComponent;

    default:
      return state;
  }
};

export default reducer;
