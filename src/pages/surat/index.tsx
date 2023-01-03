import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";
import ListSurat from "./ListSurat";
import Divider from '@mui/material/Divider';

export default function SuratPage() {
  return (
    <PageWrapper title="Daftar Surat">
      <Typography color={"#68B984"} fontWeight="bold" variant="h4" mt={10} textAlign={"center"}>
        Daftar Surat
      </Typography>
      <Divider variant="middle" />
      <ListSurat />
    </PageWrapper>
  );
}
