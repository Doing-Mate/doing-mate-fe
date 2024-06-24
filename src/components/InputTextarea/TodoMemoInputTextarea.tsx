import { InputTextarea } from "../common/InputTextarea";

export const TodoMemoInputTextarea = () => {
  return (
    <InputTextarea
      sizeType={"large"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="메모 추가"
    />
  );
};
