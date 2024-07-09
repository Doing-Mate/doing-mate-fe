import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledTodoPlaceInputText = styled(InputText)`
  width: 100%;
`;

export const TodoPlaceInputText = () => {
  return (
    <StyledTodoPlaceInputText
      sizeType={"medium"}
      fontSizeType={"smallFont"}
      borderType={"round"}
      placeholder="장소 입력"
    />
  );
};
