import { Box } from '@mui/material';
import React from 'react';

function Imagepart({ images }) {
  return (
    <Box 
      sx={{
        width: 'auto',
        overflow: 'hidden', // Ensure image stays within the Box on hover
        '&:hover img': {
          transform: 'scale(1.03)', // Scale the image on hover
        },
        transition: 'transform 0.3s ease-in-out', // Smooth transition effect
      }}
    >
      <img 
        src={images} 
        alt=""  
        style={{
          width: '100%', 
          maxWidth: '200px', 
          height: 'auto',  
          maxHeight: '130px', // Maximum height
          borderRadius: '8px',
          transition: 'transform 0.3s ease-in-out', // Smooth transition on hover
        }} 
      />
    </Box>
  );
}

export default Imagepart;

