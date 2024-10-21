import { Typography } from "@mui/material";
import { borderRadius, Box, fontSize } from "@mui/system";
import React from "react";
import Socialicon from "../socialicon/Socialicon";
import { ICONS } from "../../constants/reacticon";
import { style } from "../teamcard/Teamstyle";
function Teamcard({ images, heading, paragraph }) {
  const iconstyle = {
    color: "blue",
    border: "1px solid gray",
    height: "30px",
    width: "30px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  const information = [
    {
      icon: ICONS.FACEBOOK,
      styles: iconstyle,
    },
    {
      icon: ICONS.TWITTER,
      styles: iconstyle,
    },
    {
      icon: ICONS.INSTAGRAM,
      styles: iconstyle,
    },
    {
      icon: ICONS.LINKEDIN,
      styles: iconstyle,
    },
  ];

  return (
    <>
      <Box sx={style.team}>
      <Box
        sx={{
          width: '251px',
          height: '288px',
          borderRadius: '12px',
          zIndex: '1',
          overflow: 'hidden', 
          transition: 'transform 1s ease-in-out', 
          '&:hover img': {
            transform: 'scale(1.03)',
          },
          '@media (max-width: 600px)': {
            width: '100%', 
          },
        }}
      >
        <img
          src={images}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography fontSize={"30px"} color="blue" fontWeight={"400"}>
            {heading}
          </Typography>
          <Typography fontStyle={"italic"}>{paragraph}</Typography>
        </Box>
        <Box display={"flex"} gap={"10px"}>
          {information.map((item, index) => (
            <Socialicon key={index} icon={item.icon} styles={item.styles} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Teamcard;
