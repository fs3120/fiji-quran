import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import ContentAbout from "./content";
import TitleAbout from "./title";

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <Container>
          <TitleAbout title="About Us"/>
          <Divider variant="middle" />
          <ContentAbout />
        </Container>
      </MainCard>
    </PageWrapper>
  );
}
