import { Box, display, padding, width } from "@mui/system";
import Contactinformation from "../contactinformation/Contactinformation";
import ContactForm from "../contactform/Contactform";
import {Styles} from '../contactsection/contactsectionstyle'
import Rapeting from "../rapetingdata/Rapeting";
function ContactSection() {
  const information = [
    {
      heading: "Address:",
      paragraph: "11 West Town",
      subpara: "PBo 12345, United States",
    },
    {
        heading: "Phone:",
        paragraph: "+92 3049469130",
        subpara: "+92 3106515744",
      },
      {
        heading: "Email:",
        paragraph: "info@example.com",
        subpara: "email@example.com",
      },
  ];
  return (
    <>
      <Box sx={Styles.container}>
        <Box>
            <Rapeting
            heading="Contact Us"
            paragraph="Lorem ipsum dolor sit amet"
            />
         
        </Box>
        <Box sx={Styles.subcontainer}>
          <Box sx={Styles.information}>
            {information.map((item, index) => (
              <Contactinformation
                key={index}
                heading={item.heading}
                paragraph={item.paragraph}
                subpara={item.subpara}
              />
            ))}
          </Box>
          <Box sx={Styles.form}>
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactSection;

