import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListJuz from "./ListJuz";

export default function JuzPage() {
  return (
    <PageWrapper title="Daftar Juz">
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
      <ListJuz />
    </PageWrapper>
  );
}
