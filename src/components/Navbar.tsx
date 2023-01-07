import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Sidebar from "./Sidebar";
import Button from "@mui/material/Button";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#68B984" }}>
      <Toolbar>
        <Sidebar />
        <Button
          onClick={() => navigate("/")}
          sx={{ color: "white" }}
          disableRipple
        >
          <AutoStoriesIcon sx={{ marginRight: 1 }} />
          <Typography sx={{ letterSpacing: ".3rem" }}>Fiji Quran</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
