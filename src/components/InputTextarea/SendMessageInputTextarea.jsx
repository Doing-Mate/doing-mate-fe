import { InputTextarea } from "../common/InputTextarea";

export const SendMessageInputTextarea = () => {
  return (
    <InputTextarea
      sizeType={"small"}
      fontSizeType={"smallFont"}
      borderType={"square"}
      placeholder="무엇이든 물어보세요"
      required={true}
    />
  );
};
