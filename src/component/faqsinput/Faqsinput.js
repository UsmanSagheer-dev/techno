import React, { useState } from "react";
import { Box, fontSize, padding, width } from "@mui/system";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";

export default function Faqsinput({ title, paragraph }) {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box sx={styles.container} onClick={toggleParagraph}>
        <Box sx={styles.header}>
          <Box sx={styles.headerContainer}>
            <Box>
              <ArrowCircleRightIcon sx={styles.arrow} />
            </Box>
            <Box>
              <Typography sx={styles.heading}>{title}</Typography>
            </Box>
          </Box>
          <Box
            onClick={toggleParagraph}
            sx={{
              cursor: "pointer",
              transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <KeyboardArrowDownIcon />
          </Box>
        </Box>

        {isOpen && <Box sx={styles.paragraph}>{paragraph}</Box>}
      </Box>
    </>
  );
}


export const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "10px",
    width: "83%",
    backgroundColor: "#f8f8f8",
    "@media (max-width: 600px)": {
      padding: "15px",
      width:'100%'
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    color: "blue",
    gap: "10px",
  },
  paragraph: {
    padding: "30px",
    marginTop: "10px",
    fontSize: "15px",
    "@media (max-width: 600px)": {
      padding: "5",
    },
  },
  arrow: {
    color: "blue",
    fontSize: "20px",
  },
  heading: {
    fontSize: "23px",

    "@media (max-width: 600px)": {
      fontSize: "12px",
    },
  },
};
