import MainCard from "../../components/MainCard";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const ListSurat = ({ data }: any) => {
  return (
    <MainCard
      direction="row"
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
      center
      gap={2}
      padding={5}
    >
      {data.map((data: any) => (
        <Button
          color="secondary"
          variant="contained"
          sx={{ backgroundColor: "#68B984", width: "20vw", height: "10vh" }}
        >
          <Typography>
            {data.nomor}. {data.nama_latin} ({data.nama})
          </Typography>
        </Button>
      ))}
    </MainCard>
  );
};

export default ListSurat;
