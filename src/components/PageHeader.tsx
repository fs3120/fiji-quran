import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MainCard from "./MainCard";

interface navigationBtn {
  disabled?: boolean;
  label: string;
  navigation: string;
}

interface PageHeaderProps {
  prev: navigationBtn;
  next: navigationBtn;
  list: navigationBtn;
}

export default function PageHeader({ prev, next, list }: PageHeaderProps) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "0",
      }}
    >
      <MainCard
        direction="row"
        gap={2}
        wrap
        sx={{ justifyContent: "space-around" }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          disabled={prev.disabled}
          variant="contained"
          onClick={() => navigate(prev.navigation)}
          sx={{
            backgroundColor: "#68B984",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          {prev.label}
        </Button>
        <Button
          startIcon={<ListIcon />}
          variant="contained"
          onClick={() => navigate(list.navigation)}
        >
          {list.label}
        </Button>
        <Button
          endIcon={<ArrowForwardIcon />}
          disabled={next.disabled}
          variant="contained"
          onClick={() => navigate(next.navigation)}
          sx={{
            backgroundColor: "#68B984",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          {next.label}
        </Button>
      </MainCard>
    </AppBar>
  );
}
