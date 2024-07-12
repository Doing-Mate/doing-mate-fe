import styled from "styled-components";
import { Label } from "../Label";

interface DropdownListProps {
  dataList: { [key: string]: string };
  setSelectedItem: React.Dispatch<[string, string]>;
}

export const DropdownList = ({
  dataList,
  setSelectedItem,
  ...props
}: DropdownListProps) => {
  return (
    <StyledDropdownList {...props}>
      {Object.entries(dataList).map(([key, value]) => (
        <StyledDropdownListItem
          key={key}
          onClick={() => setSelectedItem([key, value])}
        >
          <Label fontSizeType={"smallFont"}>{value}</Label>
        </StyledDropdownListItem>
      ))}
    </StyledDropdownList>
  );
};

const StyledDropdownList = styled.ul`
  position: fixed;
  width: inherit;
  cursor: pointer;
  padding: 0px;
  text-align: center;
  border: 1px solid black;
  z-index: 1;
  background-color: white;
`;

const StyledDropdownListItem = styled.li`
  margin: 10px;
`;
