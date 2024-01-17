import styled from "styled-components";
import { Label } from "./label";

export const DropdownList = ({ dataList, setSelectedItem, ...props }) => {
  return (
    <StyledDropdownList {...props}>
      {dataList.map((item) => (
        <li onClick={() => setSelectedItem(item)}>
          <Label fontSizeType={"smallFont"}>{item}</Label>
        </li>
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
