import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListHalaman from "./ListHalaman";

export default function HalamanPage() {
  return (
    <PageWrapper title="Daftar Halaman">
      <Typography
        color={"#68B984"}
        fontWeight="bold"
        variant="h4"
        mt={10}
        textAlign={"center"}
      >
        Daftar Juz
      </Typography>
      <Divider variant="middle" />
      <ListHalaman />
    </PageWrapper>
  );
}
