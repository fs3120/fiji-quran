import Typography from "@mui/material/Typography";

type Props = {
  title:string,
};

const TitleAbout = ({title}:Props) => {
  return (
    <Typography
      sx={{ marginTop: "50px", color: "#68B984" }}
      align="center"
      variant="h4"
    >
      {title}
    </Typography>
  );
};

export default TitleAbout;
