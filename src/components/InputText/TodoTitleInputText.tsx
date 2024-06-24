import { InputText } from "../common/InputText";

export const TodoTitleInputText = () => {
  return (
    <InputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="할 일 제목"
      required={true}
    />
  );
};
