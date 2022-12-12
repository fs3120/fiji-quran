import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";

export default function SheetPage() {
  return (
    <PageWrapper title="Sheet Page">
      <MainCard>
        <Typography variant="h4">Ini halaman sheet</Typography>
      </MainCard>
    </PageWrapper>
  );
}
