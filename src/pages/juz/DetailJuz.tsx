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
import { RAPIJuz } from "../../interfaces/juz";
import { RAPISurah } from "../../interfaces/surat";

const DetailJuz = () => {
  const { id } = useParams();

  let suratIndex = -1; // I give up, I use brute force way

  if (!id || isNaN(+id) || +id < 1 || +id > 30) {
    return <ErrorPage />;
  }

  const [tafsirContent, setTafsirContent] = useState("");
  const [tafsirOpen, setTafsirOpen] = useState(false);

  const { data: dataJuz } = useFetch<RAPIJuz>({
    url: `https://quran-api-black.vercel.app/juz/${id}`,
  });

  const { data: dataSurah } = useFetch<RAPISurah>({
    url: `https://quran-api-black.vercel.app/surah`,
  });

  const daftarSurat =
    dataSurah?.code === 200 &&
    dataJuz?.data.verses
      .map((ayat) => {
        if (ayat.number.inSurah === 1) {
          let jumlahAyat = 0;
          const surat = dataSurah?.data;
          for (let i = 0; i < dataSurah?.data.length; i++) {
            jumlahAyat += surat[i].numberOfVerses;
            if (jumlahAyat === ayat.number.inQuran - 1) {
              return {
                arti: surat[i + 1].name.translation.id,
                arab: surat[i + 1].name.long,
                indo: surat[i + 1].name.transliteration.id,
                desc: surat[i + 1].tafsir.id,
                jumlah_ayat: surat[i + 1].numberOfVerses,
                revelation: surat[i + 1].revelation.id,
              };
            }
          }
        }
        return null;
      })
      .filter((e) => e !== null);

  return (
    <PageWrapper title="Detail Surat">
      <TafsirDialog
        tafsirContent={tafsirContent}
        tafsirOpen={tafsirOpen}
        setTafsirOpen={setTafsirOpen}
      />
      <PageHeader
        list={{ label: "Daftar Juz", navigation: "/juz" }}
        prev={{
          label: "Juz Sebelumnya",
          navigation: `/juz/${+id - 1}`,
          disabled: id === "1",
        }}
        next={{
          label: "Juz Selanjutnya",
          navigation: `/juz/${+id + 1}`,
          disabled: id === "30",
        }}
      />
      {daftarSurat && dataSurah && dataJuz ? (
        <MainCard
          center
          gap={1}
          sx={{ paddingLeft: "3em", paddingRight: "3em" }}
        >
          <Typography variant="h3" mt={5}>
            {`Juz ${dataJuz.data.juz}`}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {`Mulai dari surat ${dataJuz.data.juzStartInfo} hingga
            surat ${dataJuz.data.juzEndInfo}`}
          </Typography>
          <Typography variant="body1">
            Jumlah ayat: {dataJuz.data.totalVerses}
          </Typography>
          {dataJuz.data.verses.map((data, index) => {
            data.number.inSurah === 1 && suratIndex++;
            return (
              <LazyLoad key={data.number.inQuran}>
                <Ayat
                  surat={
                    data.number.inSurah === 1 ? daftarSurat[suratIndex] : null
                  }
                  index={index}
                  nomor_ayat={`${data.number.inSurah}`}
                  arab={data.text.arab}
                  arti={data.translation.id}
                  tafsir={data.tafsir.id.long}
                  audio={data.audio.primary}
                  setTafsirContent={setTafsirContent}
                  setTafsirOpen={setTafsirOpen}
                />
              </LazyLoad>
            );
          })}
        </MainCard>
      ) : (
        <LoadingIndicator />
      )}
    </PageWrapper>
  );
};

export default DetailJuz;
