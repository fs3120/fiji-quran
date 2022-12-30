import { ReactNode } from "react";
import MainCard from "../../components/MainCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface CardSelectProps {
  logo: ReactNode;
  text: string;
  link: string;
}

export default function CardSelect({ logo, text, link }: CardSelectProps) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(link)} sx={{ color: "white" }}>
      <MainCard
        center
        padding={4}
        gap={2}
        sx={{
          backgroundColor: "#68b883",
          borderRadius: 3,
          width: "17vw",
          height: "17vh",
          justifyContent: "center",
        }}
      >
        {logo}
        <Typography variant="h5" fontWeight="light" color="white">
          {text}
        </Typography>
      </MainCard>
    </Button>
  );
}
