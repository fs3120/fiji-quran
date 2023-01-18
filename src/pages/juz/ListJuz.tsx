import MainCard from "../../components/MainCard";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import generateNumber from "../../utils/generate-number";

const ListJuz = () => {
  const navigate = useNavigate();
  const listJuz = generateNumber(1, 30);
  return (
    <MainCard direction="row" wrap center gap={2} padding={5}>
      {listJuz.map((juz) => (
        <Button
          key={juz}
          onClick={() => navigate(`${juz}`)}
          variant="contained"
          sx={{
            backgroundColor: "#68B984",
            width: "20em",
            height: "5em",
            ":hover": { backgroundColor: "#3e8055" },
          }}
        >
          <Typography fontSize="1.5em" fontFamily="Calibri">
            {`Juz ${juz}`}
          </Typography>
        </Button>
      ))}
    </MainCard>
  );
};

export default ListJuz;
