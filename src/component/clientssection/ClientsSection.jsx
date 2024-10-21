import React from 'react';
import ClientsCard from '../clientscard/ClientsCard';
import { ReactComponent as Clientsvg } from "../../assets/svg/clientscard1.svg";
import { ReactComponent as Clientsvg2} from "../../assets/svg/clientscard2.svg";
import { ReactComponent as Clientsvg3 } from "../../assets/svg/clientscard3.svg";
import { Box } from '@mui/material'; 
import styles from '../../component/clientssection/clientsstyle';  // Import the separated styles

function ClientsSection() {
    const information = [
        {
            svgicon: <Clientsvg />,
            heading: '232',
            paragraph: 'Happy Clients',
            para:'consequuntur quae diredo'
        },
        {
            svgicon: <Clientsvg2 />,
            heading: '521',
            paragraph: 'Completed Projects',
                    para:'adipisci atque quia aut'
        },
        {
            svgicon: <Clientsvg3 />,
            heading: '453',
            paragraph: 'Hours Of Support',
                    para:'aut commodi quaerat'
        }
    ];

    return (
        <Box sx={styles.container}>
            {/* Overlay */}
            <Box sx={styles.overlay}></Box>

            {/* Content */}
            <Box sx={styles.content}>
                {information.map((item, index) => (
                    <ClientsCard
                        key={index}
                        svgicon={item.svgicon}
                        heading={item.heading}
                        paragraph={item.paragraph}
                        para={item.para}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default ClientsSection;
