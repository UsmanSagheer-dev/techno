import React from "react";
import { IMAGES } from "../../constants/Images";
import { ICONS } from "../../constants/reacticon";
import Socialicon from "../socialicon/Socialicon";
import "./technostyles.css"; // Import the CSS file
import { color } from "@mui/system";

function Techno() {
  const style={
    color:'white',
    fontSize:'30px'
  };
  const information = [
    {
      link:'https://www.facebook.com/search/top/?q=Muhammad%20Usman',
      icon: ICONS.FACEBOOK,
      styles:style
    },
    {
      link:'https://www.facebook.com/search/top/?q=Muhammad%20Usman',
      icon: ICONS.TWITTER,
      styles:style
    },
    {
      link:'https://www.facebook.com/search/top/?q=Muhammad%20Usman',
      icon: ICONS.INSTAGRAM,
      styles:style
    },
    {
      link:'https://www.facebook.com/search/top/?q=Muhammad%20Usman',
      icon: ICONS.LINKEDIN,
      styles:style
    },
  ];

  return (
    <div className="technomain">
      <div className="technoImg">
        <img id="lsl" src={IMAGES.LOGO} alt="Logo" />
      </div>
      <div className="technoPara">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut consectetur adipisicing elit, Lorem ipsum
          dolor sit amet.
        </p>
        <h1>Follow us</h1>
      </div>
      <div className="technoheading">
        <div className="technoicon">
          {information.map((item, index) => (
            <Socialicon key={index} icon={item.icon} 
            styles={item.styles}
            link={item.link}
            />
          ))}
        </div>
        <div className="footercopy">
          <h1>Technoit © 2023 - Designed by <span style={{color:'pink'}}>Zr Themes</span> </h1>
        </div>
      </div>
    </div>
  );
}

export default Techno;
