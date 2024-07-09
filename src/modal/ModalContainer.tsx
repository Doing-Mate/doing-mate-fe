import { ModalPortal } from "../portal/Portal";
import { useModalStateContext } from "../hooks/useModalStateContext";
import { useModalModeContext } from "../hooks/useModalModeContext";
import { BasicScheduleModal } from "./ScheduleModal/BasicScheduleModal";
import { BasicCategoryModal } from "./CategoryModal/BasicCategoryModal";

export const ModalContainer = () => {
  const { onModal } = useModalStateContext();
  const { modalMode } = useModalModeContext();

  const ModalModels = {
    schedule: BasicScheduleModal,
    category: BasicCategoryModal,
  };

  const Modal = ModalModels[modalMode.modelType];

  return <ModalPortal>{onModal && <Modal mode={modalMode} />}</ModalPortal>;
};