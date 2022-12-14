import Typography from "@mui/material/Typography";
import MainCard from "../../components/MainCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

interface TeamDetailItemProps {
  name: string;
  desc: string;
  img: string;
  githubLink: string;
  igLink: string;
  linkedInLink: string;
}

const TeamDetailItem = ({
  name,
  desc,
  img,
  githubLink,
  igLink,
  linkedInLink,
}: TeamDetailItemProps) => {
  return (
    <MainCard center sx={{ boxShadow: "0px 0px 10px 0px grey" }}>
      <img
        src={img}
        alt={name}
        style={{
          padding: 20,
          height: "20vw",
          width: "20vw",
          borderRadius: "50%",
        }}
      />
      <Typography textAlign="center" gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography textAlign="center" variant="body1" color="grey">
        {desc}
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton
          onClick={() => {
            window.open(githubLink, "_blank");
          }}
          sx={{ color: "black" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(igLink, "_blank");
          }}
          sx={{ color: "black" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open(linkedInLink, "_blank");
          }}
          sx={{ color: "black" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </MainCard>
  );
};

export default TeamDetailItem;
