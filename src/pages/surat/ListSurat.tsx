import MainCard from "../../components/MainCard";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/useFetch";

interface dataSurat {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
}

const ListSurat = () => {
  const { data } = useFetch<dataSurat[]>({
    url: "https://equran.id/api/surat",
    log: true,
  });
  return (
    <MainCard
      direction="row"
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
      center
      gap={2}
      padding={5}
    >
      {data ? (
        data.map((data: any) => (
          <Button
            key={data.nomor}
            color="secondary"
            variant="contained"
            sx={{ backgroundColor: "#68B984", width: "20vw", height: "10vh" }}
          >
            <Typography>
              {data.nomor}. {data.nama_latin} ({data.nama})
            </Typography>
          </Button>
        ))
      ) : (
        <Typography variant="h4">Loading...</Typography>
      )}
    </MainCard>
  );
};

export default ListSurat;
