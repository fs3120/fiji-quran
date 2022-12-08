import { useNavigate } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [position, setPosition] = useState();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#68B984" }} >
      <Container>
        <Toolbar>
          <AutoStoriesIcon sx={{ marginRight: 3 }} />
          <Typography sx={{ letterSpacing: ".3rem" }}>Fiji Quran</Typography>
          <Tabs
            textColor="inherit"
            sx={{ marginLeft: "auto" }}
            value={position}
            onChange={(e, index) => setPosition(index)}
          >
            <Tab onClick={() => navigate("/")} label="Home" />
            <Tab onClick={() => navigate("/about")} label="About" />
            <a
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href="https://github.com/fikrisyahid/fiji-quran"
            >
              <Tab label="Github" icon={<OpenInNewIcon />} iconPosition="end" />
            </a>
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
