import { ReactNode, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";

type TMenuListItem = [string, ReactNode, string, boolean];

const PageListsItem: TMenuListItem[] = [
  ["Home", <HomeIcon sx={{ color: "#68b883" }} />, "/", false],
  ["About", <InfoIcon sx={{ color: "#68b883" }} />, "/about", false],
  [
    "Github",
    <GitHubIcon sx={{ color: "#68b883" }} />,
    "https://github.com/fikrisyahid/fiji-quran",
    true,
  ],
];

const menuListsItem: TMenuListItem[] = [
  ["Juz", <BookmarksIcon sx={{ color: "#68b883" }} />, "/juz", false],
  ["Surat", <LibraryBooksIcon sx={{ color: "#68b883" }} />, "/surat", false],
  ["Halaman", <MenuBookIcon sx={{ color: "#68b883" }} />, "/halaman", false],
];

export default function Sidebar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const generateItem = (lists: TMenuListItem[]) => (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: "15rem" }}>
      <List>
        {lists.map((item, index) => (
          <ListItem
            onClick={() => {
              if (item[3]) {
                window.open(item[2], "_blank");
              } else {
                navigate(item[2]);
              }
            }}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={() => setDrawerOpen(true)} sx={{ color: "white" }}>
        <MenuIcon />
      </Button>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <AutoStoriesIcon
            sx={{
              fontSize: "70px",
              color: "#68b883",
              marginTop: 2,
              marginBottom: 0.5,
            }}
          />
          <Typography
            variant="h5"
            sx={{ letterSpacing: ".3rem" }}
            color="grey"
            mb={1}
          >
            Fiji Quran
          </Typography>
          <Divider sx={{ width: "75%" }} />
          {generateItem(PageListsItem)}
          <Divider sx={{ width: "75%" }} />
          {generateItem(menuListsItem)}
        </Box>
      </Drawer>
    </>
  );
}
