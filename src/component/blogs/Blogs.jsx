import React from "react";
import { Box, display, height, padding, width } from "@mui/system";
import ActionAreaCard from "../actionareacard/Actionareacard";
import Rapeting from '../rapetingdata/Rapeting'
import { IMAGES } from "../../constants/Images";

import { styles } from "../imagesection/imagesectionstyle";
function Blogs() {
  const information = [
    {
      image: IMAGES.BLOG,
      heading: "Domain & Hosting",
      paragraph: "How to host website on any hosting provider?",
      subheading: "William Bla",
      subpara: "Feb 1, 2022",
    },
    {
      image: IMAGES.BLOG2,
      heading: "Advertisement",
      paragraph: "How to create add on google adwords?",
      subheading: "Jobi Ret",
      subpara: "Oct 5, 2022",
    },
    {
      image: IMAGES.BLOG3,
      heading: "Marketing",
      paragraph: "What is digital marketing and why is important?",
      subheading: "Main Dow",
      subpara: "Dec 22, 2024",
    },
  ];
  return (
    <div>
      <Box sx={Styles.container}>
        <Box>
        <Rapeting heading="Blogs" paragraph="Lorem ipsum dolor sit amet" />
        </Box>
        <Box sx={Styles.cardContainer}>
          {information.map((item, index) => (
            <ActionAreaCard
              key={index}
              image={item.image}
              heading={item.heading}
              paragraph={item.paragraph}
              subheading={item.subheading}
              subpara={item.subpara}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Blogs;
export const Styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '50px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',  
  gap:'45px',
    alignItems: 'center', 
    '@media (max-width: 768px)': { // When the screen is smaller than 768px
     padding:'15px' // Adjust main container width to auto
    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center', 

    width: '100%',
    gap:'25px',
    flexWrap:'wrap'
  }
};

