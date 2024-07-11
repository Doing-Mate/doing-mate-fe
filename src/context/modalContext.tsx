import { createContext, useState } from "react";
import { ModalProps, BasicComponent } from "./modalPageComponents";

interface modalStateType {
  onModal: boolean;
  setOnModal: (onModal: boolean) => void;
}

const ModalStateContext = createContext<modalStateType>({
  onModal: false,
  setOnModal: () => {},
});

interface modalModeType {
  modalMode: ModalProps;
  setModalMode: (modalMode: ModalProps) => void;
}

const ModalModeContext = createContext<modalModeType>({
  modalMode: BasicComponent,
  setModalMode: () => {},
});

interface ModalContextProviderProps {
  children: React.ReactNode;
}
const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [onModal, setOnModal] = useState(false);
  const [modalMode, setModalMode] = useState<ModalProps>(BasicComponent);

  return (
    <ModalModeContext.Provider value={{ modalMode, setModalMode }}>
      <ModalStateContext.Provider value={{ onModal, setOnModal }}>
        {children}
      </ModalStateContext.Provider>
    </ModalModeContext.Provider>
  );
};

export { ModalStateContext, ModalModeContext, ModalContextProvider };
