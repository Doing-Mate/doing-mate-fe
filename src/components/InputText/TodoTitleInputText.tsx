import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledTodoTitleInputText = styled(InputText)`
  width: 100%;
`;
interface TodoTitleInputTextProps {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TodoTitleInputText = ({
  text,
  onChange,
}: TodoTitleInputTextProps) => {
  return (
    <StyledTodoTitleInputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="할 일 제목"
      onChange={onChange}
      required={true}
      value={text}
    ></StyledTodoTitleInputText>
  );
};
