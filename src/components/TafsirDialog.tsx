import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";

interface TafsirDialogProps {
  tafsirOpen: boolean;
  tafsirContent: string;
  setTafsirOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TafsirDialog({
  tafsirOpen,
  tafsirContent,
  setTafsirOpen,
}: TafsirDialogProps) {
  return (
    <Dialog open={tafsirOpen} onClose={() => setTafsirOpen(false)}>
      <DialogContent>
        <Typography variant="body1">{tafsirContent}</Typography>
      </DialogContent>
    </Dialog>
  );
}
