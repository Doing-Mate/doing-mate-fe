import { useState } from "react";
import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledTodoPlaceInputText = styled(InputText)`
  width: 100%;
`;
interface TodoPlaceInputTextProps {
  text?: string;
  onChangeData?: (value: string) => void;
}

export const TodoPlaceInputText = ({
  text,
  onChangeData,
}: TodoPlaceInputTextProps) => {
  const [value, setValue] = useState(text);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChangeData!(event.target.value);
  };
  return (
    <StyledTodoPlaceInputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="장소 입력"
      onChange={onChange}
      value={value}
    />
  );
};
