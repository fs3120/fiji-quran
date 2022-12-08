import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

export default function Sidebar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setState(open);
  };

  const list = () => (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Juz", "Surah", "Page"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <MenuIcon />
      </Button>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
