import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={1}
      style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}
    >
      <Button variant="contained" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant="contained" onClick={() => navigate("/about")}>
        About
      </Button>
    </Box>
  );
}
