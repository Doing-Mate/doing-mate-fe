import { useState } from "react";
import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledTodoTitleInputText = styled(InputText)`
  width: 100%;
`;
interface TodoTitleInputTextProps {
  text?: string;
  onChangeData?: (value: string) => void;
}

export const TodoTitleInputText = ({
  text,
  onChangeData,
}: TodoTitleInputTextProps) => {
  const [value, setValue] = useState(text);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeData!(event.target.value);
  };
  return (
    <StyledTodoTitleInputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="할 일 제목"
      onChange={onChange}
      value={value}
    />
  );
};
