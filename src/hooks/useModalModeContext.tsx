import { useContext } from "react";
import { ModalModeContext } from "../context/modalContext";

export const useModalModeContext = () => {
  const modalMode = useContext(ModalModeContext);
  if (modalMode === undefined) {
    throw new Error("useModalModeContext should be used within Provider");
  }
  return modalMode;
};
