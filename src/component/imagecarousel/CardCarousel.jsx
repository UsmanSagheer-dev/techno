import React from "react";
import Carousel from "react-material-ui-carousel";
import CardItem from "../../component/imagecarousel/carditem/Carditem";
import { IMAGES } from "../../constants/Images";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import "./cardcarousel.css";

const CardCarousel = () => {
  const commonParagraph = `
        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
        Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.
    `;

    const items = [
        {
          image: IMAGES.TERMINAL,
          title: "John Doe",
          description: "Freelancer ",
          paragraph: commonParagraph,
        },
        {
          image: IMAGES.TERMINAL1,
          title: "Jane Smith",
          description: "Web Designer",
          paragraph: commonParagraph,
        },
        {
          image: IMAGES.TERMINAL2,
          title: "Michael ",
          description: "Mobile App Developer ",
          paragraph: commonParagraph,
        },
        {
          image: IMAGES.TERMINAL3,
          title: "Emily Davis",
          description: "Backend Developer",
          paragraph: commonParagraph,
        },
        {
          image: IMAGES.TERMINAL,
          title: "William Brown",
          description: "SEO Specialist ",
          paragraph: commonParagraph,
        },
        {
          image: IMAGES.TERMINAL1,
          title: "Olivia Wilson",
          description: "Graphic Designer ",
          paragraph: commonParagraph,
        },
        {
            image: IMAGES.TERMINAL,
            title: "John Doe",
            description: "Freelancer ",
            paragraph: commonParagraph,
          },
          {
            image: IMAGES.TERMINAL1,
            title: "Jane Smith",
            description: "Web Designer",
            paragraph: commonParagraph,
          },
          {
            image: IMAGES.TERMINAL2,
            title: "Michael ",
            description: "Mobile App Developer ",
            paragraph: commonParagraph,
          },
         
      ];
      
      

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(600, 815));

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        animation="slide"
        navButtonsAlwaysVisible={false}
        indicators={true}
        indicatorIconButtonProps={{
          style: {
            padding: "10px",
            color: "gray",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "none",
            color: "red",
          },
        }}
        indicatorContainerProps={{
          style: { marginTop: "30px", textAlign: "center", width: "100%" },
        }}
      >
     
        {isSmallScreen
          ? items.map((item, idx) => (
              <div className="carousel-item-wrapper" key={idx}>
                <CardItem {...item} />
              </div>
            ))
          : isMediumScreen
          ? items
              .reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / 2);

                if (!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = [];
                }

                resultArray[chunkIndex].push(item);

                return resultArray;
              }, [])
              .map((group, index) => (
                <div className="carousel-item-wrapper" key={index}>
                  {group.map((item, idx) => (
                    <CardItem key={idx} {...item} />
                  ))}
                </div>
              ))
          : items
              .reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / 3); 

                if (!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = [];
                }

                resultArray[chunkIndex].push(item);

                return resultArray;
              }, [])
              .map((group, index) => (
                <div className="carousel-item-wrapper" key={index}>
                  {group.map((item, idx) => (
                    <CardItem key={idx} {...item} />
                  ))}
                </div>
              ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
