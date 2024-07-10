import { useState } from "react";
import { AlertDialog } from "../common/Dialog";

interface CategoryAlertDialogProps {
  Open: boolean;
  movePage: () => void;
}

export const CategoryAlertDialog = ({
  Open,
  movePage,
}: CategoryAlertDialogProps) => {
  const [open, setOpen] = useState(Open);

  const handleClose = () => {
    setOpen(false);
    movePage();
  };

  const handleSave = () => {
    setOpen(false);
    movePage();
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
