import { Button } from "../common/Button";
import styled from "styled-components";

interface SecretaryButtonProps {
  icon: string;
  onClick?: () => void;
}

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

const StyledSecretaryButton = styled(Button)`
  margin: 15px 50px;
  float: right;
`;

export const SecretaryButton = ({ icon, onClick }: SecretaryButtonProps) => {
  return (
    <StyledSecretaryButton
      sizeType={"largeSquare"}
      fontSizeType={"largeFont"}
      borderType={"none"}
      onClick={onClick}
    >
      <IconImage src={icon} />
    </StyledSecretaryButton>
  );
};
