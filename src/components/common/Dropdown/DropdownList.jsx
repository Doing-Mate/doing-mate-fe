import styled from "styled-components";
import { Label } from "../Label";

export const DropdownList = ({ dataList, setSelectedItem, ...props }) => {
  return (
    <StyledDropdownList {...props}>
      {Object.entries(dataList).map(([key, value]) => (
        <StyledDropdownListItem id={key} onClick={() => setSelectedItem(value)}>
          <Label fontSizeType={"smallFont"}>{value}</Label>
        </StyledDropdownListItem>
      ))}
    </StyledDropdownList>
  );
};

const StyledDropdownList = styled.ul`
  cursor: pointer;
  padding: 0px;
  text-align: center;
  border: 1px solid black;
`;

const StyledDropdownListItem = styled.li`
  margin: 10px;
`;
