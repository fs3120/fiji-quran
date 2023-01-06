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
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

type TMenuListItem = [string, ReactNode, string];

const menuListsItem: TMenuListItem[] = [
  ["Juz", <BookmarksIcon sx={{ color: "#68b883" }} />, "/juz"],
  ["Surat", <LibraryBooksIcon sx={{ color: "#68b883" }} />, "/surat"],
  ["Halaman", <MenuBookIcon sx={{ color: "#68b883" }} />, "/halaman"],
];

export default function Sidebar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const MenuLists = () => (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: "15rem" }}>
      <List>
        {menuListsItem.map((item, index) => (
          <ListItem
            onClick={() => navigate(item[2])}
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
          <MenuLists />
        </Box>
      </Drawer>
    </>
  );
}
