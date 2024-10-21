import React from "react";
import { Box } from "@mui/system";
import { styles } from "../projectssection/projectstyle";
import Rapeting from "../rapetingdata/Rapeting";
import { Typography } from "@mui/material";
import Button from "../button/Button";
function Projectsection() {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.overlay}>
          <Typography color="white">
            <h1>Let's Discuss your Projects</h1>
          </Typography>
          <Typography color="white" width={'74%'} flexWrap={'wrap'}>
            <p >
              We pride ourselves with our ability to perform and deliver
              results. Use the form below to discuss your project needs with our
              team, we will get back asap
            </p>
          </Typography>
          <Typography>
            <Button
              title="Contect Us"
              styles={{
                backgroundColor: "#0765de",
                color: "white",
                fontSize: "20px",
                fontFamily: "sans",
                padding: "10px 15px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                borderRadius: "25px",
                width: "130px",
                border: "none",
                justifyContent: "center",
              }}
            />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Projectsection;
