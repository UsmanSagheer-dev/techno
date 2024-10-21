import React from "react";
import Techno from "../technofooter/Techno";
import "./footer.css";
import FooterService from "../footerservices/FooterService";
import FooterContent from "../footercontent/FooterContent";
import { ICONS } from "../../constants/reacticon";
import { Input, Button } from '@mui/material'; // Import Input and Button
import MailIcon from '@mui/icons-material/Mail'; // Import Mail Icon

function Footer() {
  const details = [
    {
      heading: "Services",
      paragraph: [
        "Web Design",
        "Mobile Development",
        "Cloud Services",
        "Domain and Hosting",
        "SEO Optimization",
        "Social Media",
      ],
    },
    {
      heading: "Information",
      paragraph: [
        "About",
        "Pricing",
        "Team",
        "Portfolio",
        "FAQs",
        "Blog",
        "Coming Soon",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const data = [
    {
      locationicon: ICONS.LOCATION,
      paragraph: "101 West Town, PBO 12345, United States",
    },
    {
      locationicon: ICONS.CALL,
      paragraph: "+92 3049469130",
    },
    {
      locationicon: ICONS.EMAIL,
      paragraph: "apnausmansagheer@gmail.com",
    },
  ];

  return (
    <div className="footerSetting">
      <div className="part999">
        <Techno />
      </div>

      <div className="sersetting">
        {details.map((item, index) => (
          <FooterService
            key={index}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>

      <div className="groupofinformation">
        <div className="footercontent_set">
          <div className="contentheading">
            <h2>Contacts</h2>
          </div>
          {data.map((item, index) => (
            <FooterContent
              key={index}
              locationicon={item.locationicon}
              paragraph={item.paragraph}
            />
          ))}
        </div>

        <div className="newsletter">
          <div className="contentheading">
            <h2>Newsletter</h2>
            <p>
              Don't miss to subscribe to our new feeds, <br /> kindly fill the form below.
            </p>

            {/* Newsletter input */}
            <Input
              placeholder="Enter your email"
              startAdornment={<MailIcon />}
              endAdornment={<Button variant="contained">Subscribe</Button>}
              className="input"
            />
          </div>
        </div>
       <div>
       <button onClick={() => scrollToTop()} className="scrollToTopButton">
        click me
</button>
       </div>
      </div>
    </div>
  );
}

export default Footer;
