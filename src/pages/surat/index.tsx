import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";
import ListSurat from "./ListSurat";
import useFetch from "../../utils/useFetch";
import Divider from '@mui/material/Divider';

export default function SuratPage() {
  const { data } = useFetch("https://equran.id/api/surat");
  return (
    <PageWrapper title="Surah Page">
      <Typography color={"#68B984"} fontWeight="bold" variant="h4" mt={10} textAlign={"center"}>
        Daftar Surat
      </Typography>
      <Divider variant="middle" />
      {data && <ListSurat data={data} />}
    </PageWrapper>
  );
}
