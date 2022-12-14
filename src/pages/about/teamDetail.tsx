import MainCard from "../../components/MainCard";
import { Container } from "@mui/material";
import TeamDetailItem from "./teamDetailItem";

const TeamDetail = () => {
  return (
    <Container>
      <MainCard padding={7} center gap={10} direction="row">
        <TeamDetailItem
          name="Muhammad Nurfajri Rahman"
          desc="Fresh Graduate Teknik Informatika UIN Syarif Hidayatullah Jakarta. Memiliki Passion dalam Web Development"
          img="images/yelan.jpg"
          githubLink="https://github.com/Fyn-x"
          linkedInLink="https://www.linkedin.com/in/mnurfajrirahman/"
          igLink="https://www.instagram.com/m_nfajri_r/"
        />
        <TeamDetailItem
          name="Muhammad Fikri Syahid"
          desc="Fresh Graduate Teknik Informatika UIN Syarif Hidayatullah Jakarta. Memiliki Passion dalam Web Development"
          img="https://avatars.githubusercontent.com/u/47740296?v=4"
          githubLink="https://github.com/fikrisyahid"
          linkedInLink="https://www.linkedin.com/in/muhammad-fikri-syahid/"
          igLink="https://www.instagram.com/fs3120_/"
        />
      </MainCard>
    </Container>
  );
};

export default TeamDetail;
