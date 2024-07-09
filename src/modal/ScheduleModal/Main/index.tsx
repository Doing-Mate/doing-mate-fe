import styled, { css } from "styled-components";
import { DropdownContainer } from "../../../components/common/Dropdown/DropdownContainer";
import { TodoTitleInputText } from "../../../components/InputText/TodoTitleInputText";
import { DatePicker } from "../../../components/common/DatePicker";
import { TimePicker } from "../../../components/common/TimePicker";
import { SmallTextLabel } from "../../../components/Label/SmallTextLabel";
import { TodoPlaceInputText } from "../../../components/InputText/TodoPlaceInputText";
import { TodoMemoInputTextarea } from "../../../components/InputTextarea/TodoMemoInputTextarea";

const Category_TEXT = {
  NONE: "기본",
  생일: "생일",
  회의: "회의",
  약속: "약속",
  데이트: "데이트",
};

const Repetition_TEXT = {
  NONE: "반복 안함",
  HOUR: "1시간마다 반복",
  DAY: "하루마다 반복",
  WEEK: "일주일마다 반복",
  MONTH: "한달마다 반복",
};

interface ModalContentsProps {
  disabled: boolean;
}

export const ScheduleModalMain = ({ disabled }: ModalContentsProps) => {
  return (
    <StyledContents disabled={disabled}>
      <ContentsItem>
        <DropdownContainer
          title="카테고리"
          dataList={Category_TEXT}
        ></DropdownContainer>
        <TodoTitleInputText />
      </ContentsItem>
      <ContentsItem>
        <DatePicker />
        <TimePicker />
        <SmallTextLabel text="~" />
        <DatePicker />
        <TimePicker />
      </ContentsItem>
      <ContentsItem>
        <DropdownContainer
          title={Repetition_TEXT.NONE}
          dataList={Repetition_TEXT}
        ></DropdownContainer>
      </ContentsItem>
      <ContentsItem>
        <TodoPlaceInputText />
      </ContentsItem>
      <ContentsItem>
        <TodoMemoInputTextarea />
      </ContentsItem>
    </StyledContents>
  );
};

type ModalContentsPropsWithoutData = Omit<ModalContentsProps, "title">;

const StyledContents = styled.div<ModalContentsPropsWithoutData>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 4fr;
  padding: 20px;
  box-sizing: border-box;
  ${({ disabled = true }) =>
    disabled
      ? ""
      : css`
          pointer-events: none;
          cursor: not-allowed;
          opacity: 0.8;
        `}
`;

const ContentsItem = styled.div`
  display: flex;
  align-items: center;
`;
