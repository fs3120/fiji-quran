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
import { RAPISurah } from "../../interfaces/surat";
import { PAGE_URL, SURAH_URL } from "../../config";
import { RAPIPage } from "../../interfaces/page";

export default function DetailPage() {
  const { id } = useParams();

  let suratIndex = -1; // I give up, I use brute force way

  if (!id || isNaN(+id) || +id < 1 || +id > 604) {
    return <ErrorPage />;
  }

  const [tafsirContent, setTafsirContent] = useState("");
  const [tafsirOpen, setTafsirOpen] = useState(false);

  const { data: dataHalaman } = useFetch<RAPIPage>({
    url: `${PAGE_URL}/${id}`,
  });

  const { data: dataSurah } = useFetch<RAPISurah>({
    url: SURAH_URL,
  });

  const daftarSurat =
    dataSurah &&
    dataHalaman?.data.verses
      .map((ayat) => {
        if (ayat.number.inSurah === 1) {
          let jumlahAyat = 0;
          const surat = dataSurah?.data;
          for (let i = 0; i < dataSurah?.data.length; i++) {
            if (jumlahAyat === ayat.number.inQuran - 1) {
              return {
                arti: surat[i].name.translation.id,
                arab: surat[i].name.long,
                indo: surat[i].name.transliteration.id,
                desc: surat[i].tafsir.id,
                jumlah_ayat: surat[i].numberOfVerses,
                revelation: surat[i].revelation.id,
              };
            }
            jumlahAyat += surat[i].numberOfVerses;
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
        list={{ label: "Daftar Halaman", navigation: "/halaman" }}
        prev={{
          label: "Halaman Sebelumnya",
          navigation: `/halaman/${+id - 1}`,
          disabled: id === "1",
        }}
        next={{
          label: "Halaman Selanjutnya",
          navigation: `/halaman/${+id + 1}`,
          disabled: id === "30",
        }}
      />
      {daftarSurat && dataSurah && dataHalaman ? (
        <MainCard
          center
          gap={1}
          sx={{ paddingLeft: "3em", paddingRight: "3em" }}
        >
          <Typography variant="h3" mt={5}>
            {`Halaman ${dataHalaman.data.page}`}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {`Mulai dari surat ${dataHalaman.data.pageStartInfo} hingga
            surat ${dataHalaman.data.pageEndInfo}`}
          </Typography>
          <Typography variant="body1">
            Jumlah ayat: {dataHalaman.data.totalVerses}
          </Typography>
          {dataHalaman.data.verses.map((data, index) => {
            return (
              <LazyLoad key={data.number.inQuran}>
                <Ayat
                  surat={
                    data.number.inSurah === 1 ? daftarSurat[++suratIndex] : null
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
}
