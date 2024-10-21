import { height, maxWidth, width } from '@mui/system';
import backai from '../../assets/images/backai.png';  

const styles = {
    container: {
        backgroundImage: `url(${backai})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
 
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        gap: '20px',
        position: 'relative',
        height: '70vh',
        backgroundAttachment: 'fixed',
        '@media (max-width: 1024px)': {
            width: '100%',
            height:'auto'
          },
      },
    overlay: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',  
        zIndex: 1,  
    },
    content: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-around',
        zIndex: 2,
        flexWrap: 'wrap',
        // Media queries for responsiveness
        '@media (max-width: 1200px)': {
          width: '80%', // Adjust width for medium screens
        },
        '@media (max-width: 900px)': {
          width: '90%', // Adjust width for small screens
          justifyContent: 'center', // Center items on small screens
        },
        '@media (max-width: 600px)': {
          width: '100%', // Full width for extra small screens
          flexDirection: 'column', // Stack items vertically
          alignItems: 'center', // Center items horizontally
        },
      },
};

export default styles;
