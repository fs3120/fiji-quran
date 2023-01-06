import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import { RAPISurat } from "../../interfaces";
import { useNavigate } from "react-router-dom";

const ListSurat = () => {
  const navigate = useNavigate();
  const { data } = useFetch<RAPISurat[]>({
    url: "https://equran.id/api/surat",
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
        data.map((data: RAPISurat) => (
          <Button
            key={data.nomor}
            onClick={() => navigate(`${data.nomor}`)}
            variant="contained"
            sx={{
              backgroundColor: "#68B984",
              width: "20vw",
              height: "10vh",
              ":hover": { backgroundColor: "#3e8055" },
            }}
          >
            <Typography fontSize="150%" fontFamily="Calibri">
              {data.nomor}. {data.nama_latin} ({data.nama})
            </Typography>
          </Button>
        ))
      ) : (
        <LoadingIndicator />
      )}
    </MainCard>
  );
};

export default ListSurat;
