import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import TitleAbout from "./TitleAbout";
import AboutDetail from "./AboutDetail";
import TeamDetail from "./TeamDetail";

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <TitleAbout title="About Us" />
        <AboutDetail />
        <TitleAbout title="Core Team" />
        <TeamDetail />
      </MainCard>
    </PageWrapper>
  );
}
