import { useState } from "react";
import { DropdownList } from "./DropdownList";
import { Button } from "../Button";
import styled from "styled-components";

interface DropdownContainerProps {
  title: string;
  dataList: { [key: string]: string };
}

export const DropdownContainer = ({
  title,
  dataList,
}: DropdownContainerProps) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(title);

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
        <label>{selectedItem}</label>
        <label>{isDropdownView ? "▲" : "▼"}</label>
      </Button>
      {isDropdownView && (
        <DropdownList dataList={dataList} setSelectedItem={setSelectedItem} />
      )}
    </StyledDropdownContainer>
  );
};

const StyledDropdownContainer = styled.div`
  width: 150px;
  margin-right: 5px;
`;
