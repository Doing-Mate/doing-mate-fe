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

export const SecretaryButton = ({ icon }: SecretaryButtonProps) => {
  return (
    <Button
      sizeType={"largeSquare"}
      fontSizeType={"largeFont"}
      borderType={"none"}
    >
      <IconImage src={icon} />
    </Button>
  );
};
