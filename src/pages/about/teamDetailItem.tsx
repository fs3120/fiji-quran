import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MainCard from "../../components/MainCard";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  name: string;
  desc: string;
  img: string;
  githubLink: string;
  igLink: string;
  linkedInLink: string;
};

const TeamDetailItem = ({
  name,
  desc,
  img,
  githubLink,
  igLink,
  linkedInLink,
}: Props) => {
  return (
    <Card>
      <img
        src={img}
        alt={name}
        style={{
          border: "5px solid #555",
          height: "43vh",
          width: "43vh",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          borderRadius: "50%",
        }}
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <MainCard direction="row" center>
          <Button
            onClick={() => {
              window.open(githubLink, "_blank");
            }}
            sx={{ color: "black" }}
          >
            <GitHubIcon />
          </Button>
          <Button
            onClick={() => {
              window.open(igLink, "_blank");
            }}
            sx={{ color: "black" }}
          >
            <InstagramIcon />
          </Button>
          <Button
            onClick={() => {
              window.open(linkedInLink, "_blank");
            }}
            sx={{ color: "black" }}
          >
            <LinkedInIcon />
          </Button>
        </MainCard>
      </CardContent>
    </Card>
  );
};

export default TeamDetailItem;
