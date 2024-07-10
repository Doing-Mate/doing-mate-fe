import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

interface AlertDialogProps {
  Open: boolean;
  handleSave: () => void;
  handleClose: () => void;
  text: string;
}

export const AlertDialog = ({
  Open,
  handleSave,
  handleClose,
  text,
}: AlertDialogProps) => {
  return (
    <div>
      <Dialog open={Open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleSave}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
