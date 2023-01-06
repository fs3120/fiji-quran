import MainCard from "../../components/MainCard";
import Typography from '@mui/material/Typography'

interface AyatProps {
  arab: string;
  arti: string;
  nomor: string;
  tafsir?: string;
}

export default function Ayat({ arab, arti, nomor, tafsir }: AyatProps) {
  return (
    <MainCard sx={{ justifyContent: "end", width: "100%" }}>
      <Typography dir="rtl" variant="h4">{arab}</Typography>
      <Typography variant="body1">{nomor}. {arti}</Typography>
    </MainCard>
  );
}
