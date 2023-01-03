import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function LoadingIndicator() {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        alignContent: "space-around",
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
      <Typography mt={2}>Loading...</Typography>
    </Backdrop>
  );
}
