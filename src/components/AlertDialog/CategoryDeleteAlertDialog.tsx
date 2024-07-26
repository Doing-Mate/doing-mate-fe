import { useState } from "react";
import { AlertDialog } from "../common/Dialog";

interface CategoryAlertDialogProps {
  Open: boolean;
  okClick: () => void;
  backClick: () => void;
}

export const CategoryAlertDialog = ({
  Open,
  okClick,
  backClick,
}: CategoryAlertDialogProps) => {
  const [open, setOpen] = useState(Open);

  const handleClose = () => {
    setOpen(false);
    backClick();
  };

  const handleSave = () => {
    okClick();
    setOpen(false);
  };

  return (
    <AlertDialog
      Open={open}
      handleSave={handleSave}
      handleClose={handleClose}
      text="해당 카테고리를 삭제하시겠습니까?"
    />
  );
};
