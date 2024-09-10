import MainCard from "../../components/MainCard";
import TeamDetailItem from "./TeamDetailItem";
import TitleAbout from "./TitleAbout";

const TeamDetail = () => {
  return (
    <>
      <TitleAbout title="Core Team" />
      <MainCard padding={5} center gap={5} wrap direction="row">
      <TeamDetailItem
          name="fs3120"
          desc="Repo owner"
          img="https://avatars.githubusercontent.com/u/47740296?v=4"
          github="https://github.com/fs3120"
          ig="https://www.instagram.com/fs3120_/"
        />
        <TeamDetailItem
          name="Fyn-x"
          desc="Fresh Graduate Teknik Informatika UIN Syarif Hidayatullah Jakarta. Memiliki Passion dalam Web Development"
          img="images/xiao.png"
          github="https://github.com/Fyn-x"
          linkedIn="https://www.linkedin.com/in/mnurfajrirahman/"
          ig="https://www.instagram.com/m_nfajri_r/"
        />
      </MainCard>
    </>
  );
};

export default TeamDetail;
