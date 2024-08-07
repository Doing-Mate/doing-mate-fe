import styled, { css } from "styled-components";
import { DropdownContainer } from "../../../common/Dropdown/DropdownContainer";
import { TodoTitleInputText } from "../../../InputText/TodoTitleInputText";
import { DatePicker } from "../../../common/DatePicker";
import { TimePicker } from "../../../common/TimePicker";
import { SmallTextLabel } from "../../../Label/SmallTextLabel";
import { StarRating } from "../../../common/StarRating";
import { Checkbox } from "../../../common/Checkbox";
import { TodoPlaceInputText } from "../../../InputText/TodoPlaceInputText";
import { TodoMemoInputTextarea } from "../../../InputTextarea/TodoMemoInputTextarea";
import { ScheduleDataProps } from "../../../../context/dataInterface";

interface ModalContentsProps {
  disabled: boolean;
  data: ScheduleDataProps | undefined;
  inputData: ScheduleDataProps;
  categoryData: { [key: string]: string };
  handleInputChange: (field: string, value: string) => void;
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
  handleAllDayChange: (value: boolean) => void;
}

export const ScheduleModalMain = ({
  disabled,
  data,
  inputData,
  categoryData,
  handleInputChange,
  handleDataChange,
  handleStarChange,
  handleDropdownChange,
  handleAllDayChange,
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
          onChangeData={(value) => handleInputChange("title", value)}
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
          inputData={inputData}
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
          inputData={inputData}
        />
      </ContentsItem>
      <ContentsItem>
        <StarRatingDiv>
          <StarRating
            value={data?.importance}
            onChange={(value) => handleStarChange(value)}
          />
        </StarRatingDiv>
        <CheckboxDiv>
          <Checkbox
            key="isAllDay"
            text="하루종일"
            onChange={(value) => handleAllDayChange(value)}
            inputData={inputData}
          />
        </CheckboxDiv>
      </ContentsItem>
      <ContentsItem>
        <TodoPlaceInputText
          text={data?.place}
          onChangeData={(value) => handleInputChange("place", value)}
        />
      </ContentsItem>
      <ContentsItem>
        <TodoMemoInputTextarea
          text={data?.comment}
          onChangeData={(value) => handleInputChange("comment", value)}
        />
      </ContentsItem>
    </StyledContents>
  );
};

type ModalContentsPropsWithoutData = Omit<
  ModalContentsProps,
  | "inputData"
  | "data"
  | "categoryData"
  | "handleInputChange"
  | "handleDataChange"
  | "handleStarChange"
  | "handleDropdownChange"
  | "handleAllDayChange"
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
  margin-left: 5px;
`;

const CheckboxDiv = styled.div`
  margin-left: auto;
`;
