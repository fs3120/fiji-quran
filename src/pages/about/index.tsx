import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Divider from "@mui/material/Divider";
import TitleAbout from "./TitleAbout";
import AboutDetail from "./AboutDetail";
import TeamDetail from "./TeamDetail";

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <TitleAbout title="About Us" />
        <Divider variant="middle" />
        <AboutDetail />
        <TitleAbout title="Core Team" />
        <Divider variant="middle" />
        <TeamDetail />
      </MainCard>
    </PageWrapper>
  );
}
