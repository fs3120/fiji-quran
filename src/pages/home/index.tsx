import MainCard from "../../components/MainCard";
import PageWrapper from "../../components/PageWrapper";
import Typography from "@mui/material/Typography";
import CardSelect from "./CardSelect";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export default function HomePage() {
  return (
    <PageWrapper title="Homepage">
      <MainCard center padding={7} gap={3}>
        <Typography color={"#68B984"} variant="h2" textAlign="center">
          Selamat datang di Fiji Qur'an
        </Typography>
        <Typography color={"grey"} variant="h5" textAlign="center">
          Baca Al-Qur'an beserta tafsirnya dengan mudah
        </Typography>
        <MainCard center direction="row" gap={3}>
          <CardSelect
            logo={<BookmarksIcon sx={{ color: "white" }} />}
            text="Baca Per Juz"
            link="/juz"
          />
          <CardSelect
            logo={<LibraryBooksIcon sx={{ color: "white" }} />}
            text="Baca Per Surat"
            link="/surat"
          />
          <CardSelect
            logo={<MenuBookIcon sx={{ color: "white" }} />}
            text="Baca Per Halaman"
            link="/halaman"
          />
        </MainCard>
      </MainCard>
    </PageWrapper>
  );
}
