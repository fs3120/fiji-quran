import MainCard from "../../components/MainCard";
import TeamDetailItem from "./TeamDetailItem";
import TitleAbout from "./TitleAbout";

const TeamDetail = () => {
  return (
    <>
      <TitleAbout title="Core Team" />
      <MainCard padding={7} center gap={10} direction="row">
        <TeamDetailItem
          name="Muhammad Nurfajri Rahman"
          desc="Fresh Graduate Teknik Informatika UIN Syarif Hidayatullah Jakarta. Memiliki Passion dalam Web Development"
          img="images/yelan.jpg"
          github="https://github.com/Fyn-x"
          linkedIn="https://www.linkedin.com/in/mnurfajrirahman/"
          ig="https://www.instagram.com/m_nfajri_r/"
        />
        <TeamDetailItem
          name="Muhammad Fikri Syahid"
          desc="Fresh Graduate Teknik Informatika UIN Syarif Hidayatullah Jakarta. Memiliki Passion dalam Web Development"
          img="https://avatars.githubusercontent.com/u/47740296?v=4"
          github="https://github.com/fikrisyahid"
          linkedIn="https://www.linkedin.com/in/muhammad-fikri-syahid/"
          ig="https://www.instagram.com/fs3120_/"
        />
      </MainCard>
    </>
  );
};

export default TeamDetail;
