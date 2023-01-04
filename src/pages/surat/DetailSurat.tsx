import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import { RAPISuratDetail } from "../../interfaces";
import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";

const DetailSurat = () => {
  const { id } = useParams();
  const data = useFetch<RAPISuratDetail>({
    url: `https://equran.id/api/surat/${id}`,
    log: true,
  });
  return (
    <MainCard center gap={1} sx={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
      {data ? (
        <>
          <Typography variant="h3" mt={5}>
            {data?.nama}
          </Typography>
          <Typography variant="body1" fontSize={18} fontWeight={300}>
            {data?.nomor}. ({data?.nama_latin} / {data?.arti})
          </Typography>
          <Typography variant="body1" fontSize={18} fontWeight={300}>
            Diturunkan di {data?.tempat_turun}
          </Typography>
          <Typography variant="body1" fontSize={18} fontWeight={300}>
            Jumlah ayat: {data?.jumlah_ayat}
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            fontWeight={300}
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: data?.deskripsi }}
          />
        </>
      ) : (
        <LoadingIndicator />
      )}
    </MainCard>
  );
};

export default DetailSurat;
