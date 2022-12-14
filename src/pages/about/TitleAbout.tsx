import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Props = {
  title: string;
};

const TitleAbout = ({ title }: Props) => {
  return (
    <>
      <Typography
        sx={{ marginTop: "50px", color: "#68B984", fontWeight: "bold" }}
        align="center"
        variant="h4"
      >
        {title}
      </Typography>
      <Divider variant="middle" />
    </>
  );
};

export default TitleAbout;
