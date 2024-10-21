import zIndex from "@mui/material/styles/zIndex";

export const styles = {
  container: {
    backgroundColor: "red",
    zIndex: "2",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection:'column',
    justifyContent: "space-evenly",
    alignItems: "center",
    gap:'35px',
    position: "relative",
    flexWrap: "wrap",
    paddingBottom:'25px',
    padding:'50px',

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#f8f8f8",
      zIndex: "-1",
      gap: "20px",
    },
    "@media (max-width: 600px)": {
      padding: "10px", 
    },
  },
};
