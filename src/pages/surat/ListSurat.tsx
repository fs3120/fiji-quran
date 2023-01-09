import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import { useNavigate } from "react-router-dom";
import { ISurah, RAPISurah } from "../../interfaces/surat";

const ListSurat = () => {
  const navigate = useNavigate();

  const { data } = useFetch<RAPISurah>({
    url: "https://quran-api-black.vercel.app/surah/",
  });

  return (
    <MainCard direction="row" wrap center gap={2} padding={5}>
      {data?.code === 200 ? (
        data?.data?.map((data: ISurah) => (
          <Button
            key={data?.number}
            onClick={() => navigate(`${data?.number}`)}
            variant="contained"
            sx={{
              backgroundColor: "#68B984",
              width: "20em",
              height: "5em",
              ":hover": { backgroundColor: "#3e8055" },
            }}
          >
            <Typography fontSize="1.5em" fontFamily="Calibri">
              {data?.number}. {data?.name?.transliteration?.id} (
              {data?.name?.short})
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
