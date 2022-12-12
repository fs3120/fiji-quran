import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";

export default function PagePage() {
  return (
    <PageWrapper title="Page">
      <MainCard>
        <Typography variant="h4">Ini halaman page</Typography>
      </MainCard>
    </PageWrapper>
  );
}
