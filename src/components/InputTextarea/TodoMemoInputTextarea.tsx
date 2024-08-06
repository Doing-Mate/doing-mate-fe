import { useState } from "react";
import { InputTextarea } from "../common/InputTextarea";
import styled from "styled-components";

const StyledTodoMemoInputTextarea = styled(InputTextarea)`
  width: 100%;
`;

interface TodoMemoInputTextareaProps {
  text?: string;
  onChangeData?: (value: string) => void;
}

export const TodoMemoInputTextarea = ({
  text,
  onChangeData,
}: TodoMemoInputTextareaProps) => {
  const [value, setValue] = useState(text);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeData!(event.target.value);
  };
  return (
    <StyledTodoMemoInputTextarea
      sizeType={"large"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="메모 추가"
      value={value}
      onChange={onChange}
    />
  );
};
