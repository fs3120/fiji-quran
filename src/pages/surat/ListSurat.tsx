import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import { dataSurat } from "../../interfaces";

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
        data.map((data: dataSurat) => (
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
        <LoadingIndicator/>
      )}
    </MainCard>
  );
};

export default ListSurat;
