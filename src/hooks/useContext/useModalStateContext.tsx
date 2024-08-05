import { useContext } from "react";
import { ModalStateContext } from "../../context/modalContext";

export const useModalStateContext = () => {
  const modalState = useContext(ModalStateContext);
  if (modalState === undefined) {
    throw new Error("useModalStateContext should be used within Provider");
  }
  return modalState;
};
