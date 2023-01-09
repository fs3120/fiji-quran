import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useFetch from "../../utils/hook/useFetch";
import MainCard from "../../components/MainCard";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorPage from "../error";
import PageWrapper from "../../components/PageWrapper";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import TafsirDialog from "../../components/TafsirDialog";
import Ayat from "../../components/Ayat";
import PageHeader from "../../components/PageHeader";
import { RAPISurahDetail } from "../../interfaces/surat";

const DetailSurat = () => {
  const { id } = useParams();

  if (!id || isNaN(+id) || +id < 1 || +id > 114) {
    return <ErrorPage />;
  }

  const [tafsirContent, setTafsirContent] = useState("");
  const [tafsirOpen, setTafsirOpen] = useState(false);

  const { data } = useFetch<RAPISurahDetail>({
    url: `https://quran-api-black.vercel.app/surah/${id}`,
  });

  return (
    <PageWrapper title="Detail Surat">
      <TafsirDialog
        tafsirContent={tafsirContent}
        tafsirOpen={tafsirOpen}
        setTafsirOpen={setTafsirOpen}
      />
      <PageHeader
        list={{ label: "Daftar Surat", navigation: "/surat" }}
        prev={{
          label: "Surat Sebelumnya",
          navigation: `/surat/${+id - 1}`,
          disabled: id === "1",
        }}
        next={{
          label: "Surat Selanjutnya",
          navigation: `/surat/${+id + 1}`,
          disabled: id === "114",
        }}
      />
      {data?.code === 200 ? (
        <MainCard
          center
          gap={1}
          sx={{ paddingLeft: "3em", paddingRight: "3em" }}
        >
          <Typography variant="h3" mt={5}>
            {data.data.name.short}
          </Typography>
          <Typography variant="body1">
            {data.data.number}. ({data.data.name.transliteration.id} /{" "}
            {data.data.name.translation.id})
          </Typography>
          <Typography variant="body1">
            Surat {data.data.revelation.id}
          </Typography>
          <Typography variant="body1">
            Jumlah ayat: {data.data.numberOfVerses}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: data.data.tafsir.id }}
          />
          {data.data.verses.map((data) => (
            <LazyLoad key={data.number.inQuran}>
              <Ayat
                arab={data.text.arab}
                nomor={`${data.number.inSurah}`}
                arti={data.translation.id}
                tafsir={data.tafsir.id.long}
                audio={data.audio.primary}
                setTafsirContent={setTafsirContent}
                setTafsirOpen={setTafsirOpen}
              />
            </LazyLoad>
          ))}
        </MainCard>
      ) : (
        <LoadingIndicator />
      )}
    </PageWrapper>
  );
};

export default DetailSurat;
