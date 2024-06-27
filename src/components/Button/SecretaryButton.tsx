import { Button } from "../common/Button";
import styled from "styled-components";

interface SecretaryButtonProps {
  icon: string;
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

export const SecretaryButton = ({ icon }: SecretaryButtonProps) => {
  return (
    <StyledSecretaryButton
      sizeType={"largeSquare"}
      fontSizeType={"largeFont"}
      borderType={"none"}
    >
      <IconImage src={icon} />
    </StyledSecretaryButton>
  );
};
