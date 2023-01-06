import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
          disabled={id === "1"}
          variant="contained"
          color="success"
          onClick={() => navigate(`/surat/${Number(id) - 1}`)}
        >
          Surat Sebelumnya
        </Button>
        <Button variant="contained" onClick={() => navigate("/surat")}>
          Daftar Surat
        </Button>
        <Button
          disabled={id === "114"}
          variant="contained"
          color="success"
          onClick={() => navigate(`/surat/${Number(id) + 1}`)}
        >
          Surat Selanjutnya
        </Button>
      </Box>
    </AppBar>
  );
}
