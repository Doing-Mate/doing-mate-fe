import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledTodoPlaceInputText = styled(InputText)`
  width: 100%;
`;

interface TodoPlaceInputTextProps {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoPlaceInputText = ({
  text,
  onChange,
}: TodoPlaceInputTextProps) => {
  return (
    <StyledTodoPlaceInputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="장소 입력"
      value={text}
      onChange={onChange}
    />
  );
};
