import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import TitleAbout from "./title";
import AboutDetail from './aboutDetail';

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <Container>
          <TitleAbout title="About Us"/>
          <Divider variant="middle" />
          <AboutDetail />
        </Container>
      </MainCard>
    </PageWrapper>
  );
}
