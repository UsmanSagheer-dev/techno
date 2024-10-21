import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Contactinformation({ heading, paragraph, subpara }) {
  return (
    <>
      <Box>
        <Typography fontSize={'20px'} color="gray">{heading}</Typography>
        <Typography fontSize={'16px'} color="blue" >
         <p>{paragraph}</p> 
        
          <p>  {subpara}</p>
        </Typography>
      </Box>
    </>
  );
}

export default Contactinformation;
