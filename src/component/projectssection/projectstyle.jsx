import { display, textAlign } from '@mui/system';
import backai from '../../assets/images/backai.png';  
export const styles={
    container: {
        backgroundImage: `url(${backai})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
        top: 0,
        left: 0,
        width: '100%',
        height: '70vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',  
        zIndex: 1,  
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        gap:'25px'
    },
}