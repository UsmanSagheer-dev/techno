import { Box, Typography } from "@mui/system";
import React from "react";
import Teamcard from "../teamcard/Teamcard";
import { IMAGES } from "../../constants/Images";
import { styles } from "../team/teamsectionstyle";
import Rapeting from "../rapetingdata/Rapeting";

function Team() {
  const information = [
    {
      images: IMAGES.TEAM1,
      heading: "Jhone Bi",
      paragraph: "Application Manager",
    },
    {
      images: IMAGES.TEAM2,
      heading: "Sani Awesome",
      paragraph: "Social Media",
    },
    {
      images: IMAGES.TEAM3,
      heading: "Andrio Willi",
      paragraph: "Content Writer",
    },
    {
      images: IMAGES.TEAM4,
      heading: "Afa Jonson",
      paragraph: "Business Manager",
    },
  ];

  return (
    <>
      <Box sx={styles.container}>
        <Box>
          <Box>
            <Rapeting heading="Team" paragraph="Lorem ipsum dolor sit amet" />
          </Box>
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          {information.map((item, index) => (
            <Teamcard
              key={index}
              images={item.images}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Team;
