import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import { RAPISuratDetail, RAPITafsirDetail } from "../../interfaces";
import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";
import Ayat from "./Ayat";
import SuratHeader from "./SuratHeader";
import ErrorPage from "../error";
import PageWrapper from "../../components/PageWrapper";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";

const DetailSurat = () => {
  const { id } = useParams();

  if (id === undefined || isNaN(+id) || +id < 1 || +id > 114) {
    return <ErrorPage />;
  }

  const [tafsirContent, setTafsirContent] = useState("");
  const [tafsirOpen, setTafsirOpen] = useState(false);

  const { data: dataSurat } = useFetch<RAPISuratDetail>({
    url: `https://equran.id/api/surat/${id}`,
  });

  const { data: dataTafsir } = useFetch<RAPITafsirDetail>({
    url: `https://equran.id/api/tafsir/${id}`,
  });

  const data = dataSurat?.ayat.map(
    (ayat) =>
      dataTafsir?.tafsir
        .map((tafsir) => {
          if (tafsir.ayat === ayat.nomor) {
            return {
              arab: ayat.ar,
              nomor: `${ayat.nomor}`,
              arti: ayat.idn,
              tafsir: tafsir.tafsir,
            };
          }
          return null;
        })
        .filter((e) => e !== null)[0]
  );

  return (
    <PageWrapper title="Detail Surat">
      <Dialog open={tafsirOpen} onClose={() => setTafsirOpen(false)}>
        <DialogContent>
          <Typography variant="body1">{tafsirContent}</Typography>
        </DialogContent>
      </Dialog>
      <MainCard
        center
        gap={1}
        sx={{ paddingLeft: "10vw", paddingRight: "10vw" }}
      >
        {dataSurat && dataTafsir ? (
          <>
            <SuratHeader id={id} />
            <Typography variant="h3" mt={5}>
              {dataSurat?.nama}
            </Typography>
            <Typography variant="body1">
              {dataSurat?.nomor}. ({dataSurat?.nama_latin} / {dataSurat?.arti})
            </Typography>
            <Typography variant="body1">
              Diturunkan di {dataSurat?.tempat_turun}
            </Typography>
            <Typography variant="body1">
              Jumlah ayat: {dataSurat?.jumlah_ayat}
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              dangerouslySetInnerHTML={{ __html: dataSurat?.deskripsi || "" }}
            />
            {data?.map((data, index) => (
              <Ayat
                setTafsirContent={setTafsirContent}
                setTafsirOpen={setTafsirOpen}
                arab={data?.arab || ""}
                nomor={`${data?.nomor}`}
                arti={data?.arti || ""}
                key={index}
                tafsir={data?.tafsir || ""}
              />
            ))}
          </>
        ) : (
          <LoadingIndicator />
        )}
      </MainCard>
    </PageWrapper>
  );
};

export default DetailSurat;
