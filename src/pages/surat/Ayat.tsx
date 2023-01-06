import MainCard from "../../components/MainCard";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";

interface AyatProps {
  arab: string;
  arti: string;
  nomor: string;
  tafsir: string;
  setTafsirOpen: Dispatch<SetStateAction<boolean>>;
  setTafsirContent: Dispatch<SetStateAction<string>>;
}

export default function Ayat({
  arab,
  arti,
  nomor,
  tafsir,
  setTafsirOpen,
  setTafsirContent,
}: AyatProps) {
  return (
    <MainCard sx={{ justifyContent: "end", width: "100%" }} padding={0}>
      <Typography dir="rtl" variant="h4">
        {arab}
      </Typography>
      <Typography variant="body1">
        {nomor}. {arti}
      </Typography>
      <MainCard direction="row">
        <Button
          variant="contained"
          onClick={() => {
            setTafsirContent(tafsir);
            setTafsirOpen(true);
          }}
          sx={{
            backgroundColor: "#68B984",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          Lihat Tafsir
        </Button>
      </MainCard>
    </MainCard>
  );
}
