import { useState } from "react";
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

const menuLists = [
  ["Juz", <BookmarksIcon />],
  ["Surah", <LibraryBooksIcon />],
  ["Page", <MenuBookIcon />],
];

export default function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const list = () => (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: "15rem" }}>
      <List>
        {menuLists.map((item, index) => (
          <ListItem key={index} disablePadding>
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
        {list()}
      </Drawer>
    </>
  );
}
