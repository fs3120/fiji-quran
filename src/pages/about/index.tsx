import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import AboutDetail from "./AboutDetail";
import TeamDetail from "./TeamDetail";

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <MainCard>
        <AboutDetail />
        <TeamDetail />
      </MainCard>
    </PageWrapper>
  );
}
