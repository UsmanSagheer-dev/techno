import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { borderRadius, display, fontSize, fontWeight, height, width } from "@mui/system";

export default function ActionAreaCard({
  image,
  heading,
  paragraph,
  subheading,
  subpara,
}) {
  return (
    <Card sx={Styles.main}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{
            ...Styles.images,
            "&:hover": {
              transform: "scale(1.1)", // Scale the image on hover
              transition: "transform 0.3s ease-in", // Smooth transition
            },
          }}
        />
        <CardContent sx={Styles.content}>
          <Typography gutterBottom variant="p" component="div" sx={Styles.heading}>
            {heading}
          </Typography>
          <Typography variant="body1" sx={Styles.para}>
            {paragraph}
          </Typography>
          <Typography>
            <p>{subheading}</p>
            <p style={{fontStyle:'italic'}}>{subpara}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export const Styles = {
  main: {
    width: "400px",
    borderRadius: "16px",
    '@media (max-width: 768px)': { 
      width: 'auto',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  images: {
    width: "400px",
    height: "auto",
    borderRadius: "16px 16px",
    '@media (max-width: 768px)': { 
      width: '100%', 
      height: 'auto',
    },
  },
  heading: {
    fontSize: '18px',
  },
  para: {
    width: '300px',
    fontSize: '20px',
    fontWeight: '400',
    color: "blue",
    flexWrap: 'wrap',
    '@media (max-width: 768px)': { // Adjust paragraph for small screens
      width: '100%', // Set width to auto or 100%
      fontSize: '16px', // Decrease font size for smaller screens
    },
  },
};

