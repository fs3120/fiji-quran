import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Sidebar from "./Sidebar";

const navbarItem = ["/", "/about"];

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#68B984" }}>
      <Toolbar>
        <Sidebar />
        <AutoStoriesIcon sx={{ marginRight: 3 }} />
        <Typography sx={{ letterSpacing: ".3rem" }}>Fiji Quran</Typography>
        <Tabs
          textColor="inherit"
          sx={{ marginLeft: "auto" }}
          value={navbarItem.findIndex((e) => e === location.pathname)}
          TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
        >
          <Tab onClick={() => navigate("/")} label="Home" />
          <Tab onClick={() => navigate("/about")} label="About" />
          <Tab
            label="Github"
            icon={<OpenInNewIcon />}
            onClick={() => {
              window.open(
                "https://github.com/fikrisyahid/fiji-quran",
                "_blank"
              );
            }}
            iconPosition="end"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
