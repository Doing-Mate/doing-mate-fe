import { useState } from "react";
import { DropdownList } from "./DropdownList";
import { Button } from "../Button";
import styled from "styled-components";

export const DropdownContainer = ({ title, dataList }) => {
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
        borderType={"square"}
      >
        <StyledSelectedItem>{selectedItem}</StyledSelectedItem>
        <label>{isDropdownView ? "▲" : "▼"}</label>
      </Button>
      {isDropdownView && (
        <DropdownList dataList={dataList} setSelectedItem={setSelectedItem} />
      )}
    </StyledDropdownContainer>
  );
};

const StyledDropdownContainer = styled.div`
  width: fit-content;
`;

const StyledSelectedItem = styled.label`
  max-width: 60px;
`;
