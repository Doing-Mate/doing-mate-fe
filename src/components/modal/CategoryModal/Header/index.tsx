import styled from "styled-components";
import { useModalStateContext } from "../../../../hooks/useModalStateContext";
import { useModalModeContext } from "../../../../hooks/useModalModeContext";
import { ModalTitleLabel } from "../../../Label/ModalTitleLabel";
import { CloseButton } from "../../../Button/CloseButton";
import theme from "../../../../styles/theme";
import CloseIcon from "../../../../assets/icons/ic_close.png";

interface ModalHeaderProps {
  text: string;
}

export const CategoryModalHeader = ({ text }: ModalHeaderProps) => {
  const { onModal, setOnModal } = useModalStateContext();
  const { modalMode, setModalMode } = useModalModeContext();

  const handleModal = () => {
    modalMode.data = undefined;
    setModalMode(modalMode);
    setOnModal(!onModal);
  };

  return (
    <StyledHeader>
      <ModalTitleLabel text={text} />
      <CloseButton icon={CloseIcon} onClick={handleModal} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 100%;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 5px 4px #00000042;
  background-color: ${theme.colors.secondary};
`;
