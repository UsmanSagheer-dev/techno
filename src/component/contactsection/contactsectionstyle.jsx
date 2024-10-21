export const Styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    paddingBottom:'50px',
    "@media (max-width: 768px)": {
      width: "100%",
      alignItems: "center",
    },
  },
  subcontainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "82%",
    flexWrap: "nowrap",
    "@media (max-width: 768px)": {
      flexWrap: "wrap",
      width: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  information: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    width: "30%",
    "@media (max-width: 768px)": {
      width: "100%",
      padding: "15px",
      justifyContent: "center",
    },
  },
  form: {
    width: "70%",
    "@media (max-width: 768px)": {
      width: "100%",
      padding: "15px",
    },
  },
};
