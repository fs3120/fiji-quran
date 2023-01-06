import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import { RAPISuratDetail } from "../../interfaces";
import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";

import Ayat from "./Ayat";
import SuratHeader from "./SuratHeader";
import ErrorPage from "../error";

const DetailSurat = () => {
  const { id } = useParams();

  if (id === undefined || +id < 1 || +id > 114) {
    return <ErrorPage />;
  }

  const { data } = useFetch<RAPISuratDetail>({
    url: `https://equran.id/api/surat/${id}`,
    log: true,
  });

  return (
    <MainCard center gap={1} sx={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
      <SuratHeader id={id} />
      {data ? (
        <>
          <Typography variant="h3" mt={5}>
            {data?.nama}
          </Typography>
          <Typography variant="body1">
            {data?.nomor}. ({data?.nama_latin} / {data?.arti})
          </Typography>
          <Typography variant="body1">
            Diturunkan di {data?.tempat_turun}
          </Typography>
          <Typography variant="body1">
            Jumlah ayat: {data?.jumlah_ayat}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: data?.deskripsi }}
          />
          {data?.ayat.map((ayat, index) => (
            <Ayat
              arab={ayat.ar}
              nomor={`${ayat.nomor}`}
              arti={ayat.idn}
              key={index}
            />
          ))}
        </>
      ) : (
        <LoadingIndicator />
      )}
    </MainCard>
  );
};

export default DetailSurat;
