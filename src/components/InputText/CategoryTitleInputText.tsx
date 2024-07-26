import { useEffect, useState } from "react";
import { InputText } from "../common/InputText";
import styled from "styled-components";

const StyledCategoryTitleInputText = styled(InputText)`
  width: 100%;
  margin-bottom: 10px;
`;

interface CategoryTitleInputTextProps {
  text?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryTitleInputText = ({
  text,
  onChange,
}: CategoryTitleInputTextProps) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(text!);
  }, [text]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };
  return (
    <StyledCategoryTitleInputText
      sizeType={"large"}
      fontSizeType={"mediumFont"}
      borderType={"round"}
      placeholder="카테고리"
      onChange={onChangeValue}
      required={true}
      value={value}
    />
  );
};
