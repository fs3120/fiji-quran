import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <PageWrapper title="Homepage">
      <MainCard sx={{ marginTop:10 }}>
        <Typography variant="h4">Homepage</Typography>
      </MainCard>
    </PageWrapper>
  );
}
