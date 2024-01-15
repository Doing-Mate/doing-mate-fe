import CRUDButton from "./CRUDButton";

export default {
  component: CRUDButton,
};

export const SaveButton = {
  args: {
    text: "저장",
  },
};

export const DeleteButton = {
  args: {
    text: "삭제",
  },
};

export const EditButton = {
  args: {
    text: "수정",
    colorType: "red",
  },
};
