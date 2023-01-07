import Typography from "@mui/material/Typography";
import TitleAbout from "./TitleAbout";

const AboutDetail = () => {
  return (
    <>
      <TitleAbout title="About Us" />
      <Typography
        variant="body1"
        textAlign="center"
        fontSize="1.3rem"
        pl={5}
        pr={5}
        mt={2}
        color="grey"
      >
        Fiji Quran merupakan sebuah Al-Qur'an digital berbasis website. Tujuan
        dari website ini adalah untuk memudahkan pengguna membaca, memahami,
        mendengar serta mengingat Al-Qur'an khususnya kami dan umumnya pengguna
        dimanapun berada. Fiji Quran juga menyediakan tafsir Al-Qur'an sehingga
        pengguna dapat memahami isi dari tiap-tiap ayat.
      </Typography>
    </>
  );
};

export default AboutDetail;
