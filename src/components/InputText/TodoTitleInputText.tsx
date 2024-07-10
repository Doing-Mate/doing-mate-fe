import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledTodoTitleInputText = styled(InputText)`
  width: 100%;
`;
interface TodoTitleInputTextProps {
  text?: string;
}
export const TodoTitleInputText = ({ text }: TodoTitleInputTextProps) => {
  return (
    <StyledTodoTitleInputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="할 일 제목"
      required={true}
      value={text}
    ></StyledTodoTitleInputText>
  );
};
