import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "@mui/material/Button";
import MainCard from "./MainCard";

interface ISurat {
  arti: string;
  arab: string;
  indo: string;
  desc: string;
  jumlah_ayat: number;
  revelation: string;
}

interface AyatProps {
  arab: string;
  arti: string;
  index: number;
  nomor_ayat: string;
  tafsir: string;
  audio: string;
  surat?: ISurat | null;
  setTafsirOpen: Dispatch<SetStateAction<boolean>>;
  setTafsirContent: Dispatch<SetStateAction<string>>;
}

export default function Ayat({
  arab,
  arti,
  index,
  nomor_ayat,
  tafsir,
  audio,
  surat,
  setTafsirOpen,
  setTafsirContent,
}: AyatProps) {
  const playNext = () => {
    const allAudio = document.getElementsByTagName("audio");
    allAudio[index + 1].play();
    allAudio[index + 1].scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  };
  return (
    <MainCard sx={{ width: "90vw" }}>
      {surat && (
        <MainCard gap={1}>
          <Typography dir="rtl" variant="h4" textAlign="center">
            {surat.arab}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {`(${surat.indo} / ${surat.arti})`}
          </Typography>
          <Typography variant="body1" textAlign="center">
            Jumlah ayat: {surat.jumlah_ayat}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {surat.desc}
          </Typography>
        </MainCard>
      )}
      <Typography dir="rtl" variant="h4">
        {arab}
      </Typography>
      <Typography variant="body1">
        {nomor_ayat}. {arti}
      </Typography>
      <MainCard
        direction="row"
        gap={2}
        wrap
        center
        sx={{ alignItems: "center" }}
      >
        <audio
          id={`audio${index}`}
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
