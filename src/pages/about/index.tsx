import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import TitleAbout from "./title";
import AboutDetail from "./aboutDetail";
import TeamDetail from "./teamDetail";

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <Container>
          <TitleAbout title="About Us" />
          <Divider variant="middle" />
          <AboutDetail />
          <TitleAbout title="Core Team" />
          <Divider variant="middle" />
          <TeamDetail/>
        </Container>
      </MainCard>
    </PageWrapper>
  );
}
