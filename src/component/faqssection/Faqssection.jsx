import React from 'react'
import { Box, height, padding } from '@mui/system'
import Faqsinput from '../faqsinput/Faqsinput'
import { Typography } from '@mui/material'
import Rapeting from '../rapetingdata/Rapeting'

function Faqssection() {
    const information=[{
        title:'   What is web domain and hosting?',
        paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ' +
        'magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum ' +
        'quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut ' +
        'labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum ' +
        'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis ' +
        'autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, ' +
        'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
        title:'   What is web domain and hosting?',
        paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ' +
        'magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum ' +
        'quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut ' +
        'labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum ' +
        'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis ' +
        'autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, ' +
        'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
        title:'   What is web domain and hosting?',
        paragraph:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ' +
        'magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum ' +
        'quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut ' +
        'labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum ' +
        'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis ' +
        'autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, ' +
        'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
]
  return (
   <>
   <Box sx={styles.container}>
    <Box>
        <Typography >
            <Rapeting
            heading="FAQ's "
            paragraph='Lorem ipsum dolor sit amet'
            />
        </Typography>
    </Box>
    <Box sx={styles.subcontainer}>
    {
        information.map((item,index)=>(
            <Faqsinput
            key={index}
            title={item.title}
            paragraph={item.paragraph}
            />
        ))
    }
    </Box>
   
   </Box>
   </>
  )
}

export default Faqssection


export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    height:'auto',
    padding:'50px 20px  ',
    gap:'50px',
    '@media (max-width: 600px)': {
        padding: '20px 10px',  
      },
    },
    subcontainer:{
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


    }
}
