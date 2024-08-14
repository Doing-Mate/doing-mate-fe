import { Button } from "../common/Button";
import styled from "styled-components";

interface LogoutButtonProps {
  icon: string;
  onClick?: () => void;
}

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

const StyledLogoutButton = styled(Button)`
  margin: 22px;
  margin-right: 40px;
  float: right;
`;

export const LogoutButton = ({ icon, onClick }: LogoutButtonProps) => {
  return (
    <StyledLogoutButton
      sizeType={"mediumSquare"}
      fontSizeType={"largeFont"}
      borderType={"none"}
      onClick={onClick}
    >
      <IconImage src={icon} />
    </StyledLogoutButton>
  );
};
