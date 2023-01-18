import MainCard from "../../components/MainCard";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import generateNumber from "../../utils/generate-number";

const ListHalaman = () => {
  const navigate = useNavigate();
  const listHalaman = generateNumber(1, 114);
  return (
    <MainCard direction="row" wrap center gap={2} padding={5}>
      {listHalaman.map((page) => (
        <Button
          key={page}
          onClick={() => navigate(`${page}`)}
          variant="contained"
          sx={{
            backgroundColor: "#68B984",
            width: "20em",
            height: "5em",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          <Typography fontSize="1.5em" fontFamily="Calibri">
            {`Halaman ${page}`}
          </Typography>
        </Button>
      ))}
    </MainCard>
  );
};

export default ListHalaman;
