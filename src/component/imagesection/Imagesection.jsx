import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { IMAGES } from '../../constants/Images';
import Imagepart from '../imagepart/Imagepart';
import {styles} from '../imagesection/imagesectionstyle'
function Imagesection() {
  const images = [
    IMAGES.IMAGECAROUSE3,
    IMAGES.IMAGECAROUSE4,
    IMAGES.IMAGECAROUSE5,
    IMAGES.IMAGECAROUSE6,
    IMAGES.IMAGECAROUSE1,
    IMAGES.IMAGECAROUSE4,
    IMAGES.IMAGECAROUSE5,
    IMAGES.IMAGECAROUSE6,
    IMAGES.IMAGECAROUSE2,
    IMAGES.IMAGECAROUSE3,
    IMAGES.IMAGECAROUSE3,
    IMAGES.IMAGECAROUSE6,
    IMAGES.IMAGECAROUSE4,
    IMAGES.IMAGECAROUSE5,
    IMAGES.IMAGECAROUSE6,
    IMAGES.IMAGECAROUSE4,
    IMAGES.IMAGECAROUSE5,
    IMAGES.IMAGECAROUSE6,
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Determine how many images to show per slide based on screen size
  const getChunkSize = () => {
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 2;
    return 6; // For large screens
  };

  const chunkSize = getChunkSize();
  const imageChunks = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    imageChunks.push(images.slice(i, i + chunkSize));
  }

  return (
    <Box
      sx={styles.main}
    >
      <Carousel
        autoPlay={true}
        interval={3000}
        navButtonsAlwaysVisible={false}
        indicators={true}
        animation="slide"
        indicatorIconButtonProps={{
          style: {
            padding: '10px',
            color: 'gray',
            display:'none'
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: 'red',
            display:'none'
          },
        }}
        indicatorContainerProps={{
          style: { marginTop: '30px', textAlign: 'center', width: '100%' },
        }}
      >
        {imageChunks.map((chunk, index) => (
          <Box key={index} sx={styles.container}>
            <Grid container spacing={2}>
              {chunk.map((image, index) => (
                <Grid item xs={12 / chunkSize} key={index}>
                  <Imagepart images={image} sx={styles.imageset} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Imagesection;
