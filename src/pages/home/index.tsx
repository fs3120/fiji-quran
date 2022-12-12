import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <PageWrapper title="Homepage">
      <MainCard>
        <Typography variant="h4">Homepage</Typography>
      </MainCard>
    </PageWrapper>
  );
}
