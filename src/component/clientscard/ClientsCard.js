import React from 'react';
import { Box, Typography } from '@mui/material'; // Import Box and Typography
import styles from '../clientscard/clientscardstyle'; // Correct import

function ClientsCard({ svgicon, heading, paragraph, para }) {
  return (
    <Box textAlign="center" sx={styles.container1}>
      <Box
        sx={{
          width: '200px',
          height: '80px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)', 
          },
        }}
      >
        {svgicon}
      </Box>
      <Typography variant="h4" component="h1" mt={4} color='blue' fontSize='40px'>
        {heading}
      </Typography>
      <Typography variant="body1" mt={1} color='blue'>
        {paragraph}
      </Typography>
      <Typography color='white'>
        {para}
      </Typography>
    </Box>
  );
}

export default ClientsCard;
