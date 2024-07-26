import styled, { css } from "styled-components";
import { DropdownContainer } from "../../../common/Dropdown/DropdownContainer";
import { TodoTitleInputText } from "../../../InputText/TodoTitleInputText";
import { DatePicker } from "../../../common/DatePicker";
import { TimePicker } from "../../../common/TimePicker";
import { SmallTextLabel } from "../../../Label/SmallTextLabel";
import { StarRating } from "../../../common/StarRating";
import { TodoPlaceInputText } from "../../../InputText/TodoPlaceInputText";
import { TodoMemoInputTextarea } from "../../../InputTextarea/TodoMemoInputTextarea";
import { ScheduleDataProps } from "../../../../context/dataInterface";

const Repetition_TEXT = {
  NONE: "반복 안함",
  HOUR: "1시간마다 반복",
  DAY: "하루마다 반복",
  WEEK: "일주일마다 반복",
  MONTH: "한달마다 반복",
};

interface ModalContentsProps {
  disabled: boolean;
  data: ScheduleDataProps | undefined;
  categoryData: { [key: string]: string };
  handleInputChange: (
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleDataChange: (
    pickerType: "date" | "time",
    dataType: "start" | "end",
    value: string
  ) => void;
  handleStarChange: (value: number) => void;
  handleDropdownChange: (
    field: "repetition" | "category_id",
    key: string
  ) => void;
}

export const ScheduleModalMain = ({
  disabled,
  data,
  categoryData,
  handleInputChange,
  handleDataChange,
  handleStarChange,
  handleDropdownChange,
}: ModalContentsProps) => {
  return (
    <StyledContents disabled={disabled}>
      <ContentsItem>
        <DropdownContainer
          initial={data?.category_id}
          dataList={categoryData}
          onChange={(key) => handleDropdownChange("category_id", key)}
        ></DropdownContainer>
        <TodoTitleInputText
          text={data?.title}
          onChange={(event) => handleInputChange("title", event)}
        />
      </ContentsItem>
      <ContentsItem>
        <DatePicker
          dataDate={data?.start}
          onChangeData={(value) => handleDataChange("date", "start", value)}
        />
        <TimePicker
          dataType="start"
          dataTime={data?.start}
          onChangeData={(value) => handleDataChange("time", "start", value)}
        />
        <SmallTextLabel text="~" />
        <DatePicker
          dataDate={data?.end}
          onChangeData={(value) => handleDataChange("date", "end", value)}
        />
        <TimePicker
          dataType="end"
          dataTime={data?.end}
          onChangeData={(value) => handleDataChange("time", "end", value)}
        />
      </ContentsItem>
      <ContentsItem>
        <DropdownContainer
          initial={data?.repetition}
          dataList={Repetition_TEXT}
          onChange={(key) => handleDropdownChange("repetition", key)}
        ></DropdownContainer>
        <StarRatingDiv>
          <StarRating
            value={data?.importance}
            onChange={(value) => handleStarChange(value)}
          />
        </StarRatingDiv>
      </ContentsItem>
      <ContentsItem>
        <TodoPlaceInputText
          text={data?.place}
          onChange={(event) => handleInputChange("place", event)}
        />
      </ContentsItem>
      <ContentsItem>
        <TodoMemoInputTextarea
          text={data?.comment}
          onChange={(event) => handleInputChange("comment", event)}
        />
      </ContentsItem>
    </StyledContents>
  );
};

type ModalContentsPropsWithoutData = Omit<
  ModalContentsProps,
  | "data"
  | "categoryData"
  | "handleInputChange"
  | "handleDataChange"
  | "handleStarChange"
  | "handleDropdownChange"
  | "setInputText"
>;

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

const StarRatingDiv = styled.div`
  margin-left: 10px;
`;
