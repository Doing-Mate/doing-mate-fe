import { useState } from "react";
import { useModalStateContext } from "../../hooks/useContext/useModalStateContext";
import { AlertDialog } from "../common/Dialog";

interface ScheduleAlertDialogProps {
  Open: boolean;
  okClick: () => void;
  backClick: () => void;
}

export const ScheduleAlertDialog = ({
  Open,
  okClick,
  backClick,
}: ScheduleAlertDialogProps) => {
  const [open, setOpen] = useState(Open);
  const { setOnModal } = useModalStateContext();

  const handleClose = () => {
    setOpen(false);
    backClick();
  };

  const handleSave = () => {
    okClick();
    setOpen(false);
    setOnModal(false);
  };

  return (
    <AlertDialog
      Open={open}
      handleSave={handleSave}
      handleClose={handleClose}
      text="일정을 삭제하시겠습니까?"
    />
  );
};
