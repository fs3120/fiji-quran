import MainCard from "../../components/MainCard";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";

interface AyatProps {
  arab: string;
  arti: string;
  nomor: string;
  tafsir: string;
  audio: string;
  setTafsirOpen: Dispatch<SetStateAction<boolean>>;
  setTafsirContent: Dispatch<SetStateAction<string>>;
}

export default function Ayat({
  arab,
  arti,
  nomor,
  tafsir,
  audio,
  setTafsirOpen,
  setTafsirContent,
}: AyatProps) {
  const playNext = () => {
    const allAudio = document.getElementsByTagName("audio");
    if (+nomor + 1 <= allAudio.length) {
      allAudio[+nomor].play();
      allAudio[+nomor].scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }
  };
  return (
    <MainCard sx={{ width: "90vw" }}>
      <Typography dir="rtl" variant="h4">
        {arab}
      </Typography>
      <Typography variant="body1">
        {nomor}. {arti}
      </Typography>
      <MainCard
        direction="row"
        gap={2}
        wrap
        center
        sx={{ alignItems: "center" }}
      >
        <audio
          id={`audio${+nomor}`}
          onEnded={playNext}
          preload="none"
          controls
          src={audio}
        />
        <Button
          variant="contained"
          onClick={() => {
            setTafsirContent(tafsir);
            setTafsirOpen(true);
          }}
          sx={{
            marginTop: 2,
            marginBottom: 2,
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
