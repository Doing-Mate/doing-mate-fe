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

// interface modalModeType {
//   modalMode: ModalProps;
//   setModalMode: (modalMode: ModalProps) => void;
// }

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
    <ModalStateContext.Provider value={{ onModal, setOnModal }}>
      <ModalModeContext.Provider value={{ modalMode, setModalMode }}>
        {children}
      </ModalModeContext.Provider>
    </ModalStateContext.Provider>
  );
};

export { ModalStateContext, ModalModeContext, ModalContextProvider };
