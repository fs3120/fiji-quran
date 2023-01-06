import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SuratHeader({ id }: { id: string }) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "0",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-around"
        position="sticky"
      >
        <Button
          startIcon={<ArrowBackIcon />}
          disabled={id === "1"}
          variant="contained"
          onClick={() => navigate(`/surat/${+id - 1}`)}
          sx={{
            backgroundColor: "#68B984",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          Surat Sebelumnya
        </Button>
        <Button
          startIcon={<ListIcon />}
          variant="contained"
          onClick={() => navigate("/surat")}
        >
          Daftar Surat
        </Button>
        <Button
          endIcon={<ArrowForwardIcon />}
          disabled={id === "114"}
          variant="contained"
          onClick={() => navigate(`/surat/${+id + 1}`)}
          sx={{
            backgroundColor: "#68B984",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          Surat Selanjutnya
        </Button>
      </Box>
    </AppBar>
  );
}
