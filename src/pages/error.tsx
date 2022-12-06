import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainCard from "../components/MainCard";
import PageWrapper from "../components/PageWrapper";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <PageWrapper title="Page not found">
      <MainCard gap={2} center>
        <Typography variant="h3" fontWeight={300} textAlign="center">Page not found</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Go back to home
        </Button>
      </MainCard>
    </PageWrapper>
  );
}
