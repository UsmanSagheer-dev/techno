import React from "react";
import "./landing.css";
import Button from "../button/Button";
import Navbar from "../../component/navbar/Navbar";
import { ICONS } from "../../constants/reacticon";
import Socialicon from "../socialicon/Socialicon";
import ParticlesComponent from "../particles/ParticlesComponent";
import { color, fontSize } from "@mui/system";
function Landing() {
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
    <>
      <div className="super">
        <div className="superpart1">
          <Navbar />
        </div>
        <ParticlesComponent />
        <di className="superpart2">
     
          <div className="landingmain">
         
            <div className="space"></div>
            <div className="superior">
              <div className="information">
                <div className="info1">
                  <h1>Delivering Superior Services</h1>
                  <h2>IT Solutions.</h2>
                </div>
                <div className="superior_heading">
                  <p>
                    You can easily change any design to your own. It is also
                    highly customizable SEO friendly template.
                  </p>
                </div>
                <div className="iconsetting">
                  {information.map((item, index) => (
                    <Socialicon
                      key={index}
                      link={item.link}
                      icon={item.icon}
                      styles={item.styles}
                    />
                  ))}
                </div>
                <div className="landingbutton ">
                  <Button
                    title="Get Quotes"
                    styles={{
                      backgroundColor: "#0765de",
                      color: "white",
                      fontSize: "20px",
                      fontFamily: "sans",
                      padding: "10px 15px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "25px",
                      width: "130px",
                      border: "none",
                      justifyContent: "center",
                    }}
                  />
                  <Button
                    title="Get Started"
                    styles={{
                      backgroundColor: "#0765de",
                      color: "white",
                      fontSize: "20px",
                      fontFamily: "sans",
                      padding: "10px 15px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "25px",
                      width: "130px",
                      border: "none",
                      justifyContent: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </di>
      </div>
    </>
  );
}

export default Landing;
