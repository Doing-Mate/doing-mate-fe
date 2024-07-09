import { useState } from "react";
import { useModalStateContext } from "../../hooks/useModalStateContext";
import { AlertDialog } from "../common/Dialog";

interface ScheduleAlertDialogProps {
  Open: boolean;
  movePage: () => void;
}

export const ScheduleAlertDialog = ({
  Open,
  movePage,
}: ScheduleAlertDialogProps) => {
  const [open, setOpen] = useState(Open);
  const { setOnModal } = useModalStateContext();

  const handleClose = () => {
    setOpen(false);
    movePage();
  };

  const handleSave = () => {
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
