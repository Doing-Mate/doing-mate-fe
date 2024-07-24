import { InputTextarea } from "../common/InputTextarea";
import styled from "styled-components";

const StyledTodoMemoInputTextarea = styled(InputTextarea)`
  width: 100%;
`;

interface TodoMemoInputTextareaProps {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoMemoInputTextarea = ({
  text,
  onChange,
}: TodoMemoInputTextareaProps) => {
  return (
    <StyledTodoMemoInputTextarea
      sizeType={"large"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="메모 추가"
      value={text}
      onChange={onChange}
    />
  );
};
