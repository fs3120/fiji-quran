import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <Typography variant="h4">About</Typography>
      </MainCard>
    </PageWrapper>
  );
}
