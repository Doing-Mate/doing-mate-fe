import { useEffect, useState } from "react";
import { DropdownList } from "./DropdownList";
import { Button } from "../Button";
import styled from "styled-components";

interface DropdownContainerProps {
  initial?: string;
  dataList?: { [key: string]: string };
  onChange: (key: string) => void;
}

export const DropdownContainer = ({
  initial,
  dataList,
  onChange,
}: DropdownContainerProps) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<[string, string]>(["", ""]);

  useEffect(() => {
    selectedItem[0] !== "" && onChange(selectedItem[0]);
  }, [selectedItem]);

  useEffect(() => {
    const data = Object.entries(dataList!).find((item) => item[0] === initial);
    data === undefined
      ? setSelectedItem(Object.entries(dataList!)[0])
      : setSelectedItem(data);
  }, []);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 100);
  };

  return (
    <StyledDropdownContainer
      onBlur={handleBlurContainer}
      onClick={handleClickContainer}
    >
      <Button
        buttonType="dropdown"
        sizeType={"mediumRectangle"}
        fontSizeType={"smallFont"}
        borderType={"modal"}
      >
        <label>{selectedItem[1]}</label>
        <label>{isDropdownView ? "▲" : "▼"}</label>
      </Button>
      {isDropdownView && (
        <DropdownList dataList={dataList!} setSelectedItem={setSelectedItem} />
      )}
    </StyledDropdownContainer>
  );
};

const StyledDropdownContainer = styled.div`
  width: 150px;
  margin-right: 5px;
`;
