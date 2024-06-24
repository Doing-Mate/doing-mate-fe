import { Button } from "../common/Button";
import styled from "styled-components";

interface SecretaryButtonProps {
  icon: string;
}

const TransparentButton = styled(Button)`
  background-color: transparent;
`;

const IconImage = styled.img`
  width: inherit;
  height: inherit;
  margin: auto;
`;

export const SecretaryButton = ({ icon }: SecretaryButtonProps) => {
  return (
    <TransparentButton
      sizeType={"largeSquare"}
      fontSizeType={"largeFont"}
      borderType={"none"}
    >
      <IconImage src={icon} />
    </TransparentButton>
  );
};
