import React from "react";
import ChooseCard1 from "../chooseCard1/ChooseCard1";
import ChooseCard2 from "../choosecard2/ChooseCard2";
import { ReactComponent as Icons1 } from "../../assets/svg/icon-1.svg";
import { ReactComponent as Icons2 } from "../../assets/svg/icon-2.svg";
import { ReactComponent as Icons3 } from "../../assets/svg/icon-3.svg";
import { ReactComponent as Icons4 } from "../../assets/svg/icon-4.svg";
import { ReactComponent as Icons5 } from "../../assets/svg/icon-5.svg";
import { ReactComponent as Icons6 } from "../../assets/svg/icon-6.svg";
import { IMAGES } from "../../constants/Images";
import "./choosepart.css";
import Rapeting from "../rapetingdata/Rapeting";

function ChoosePart() {
  const information = [
    {
      svgicon: <Icons1 />,
      heading: "Experience",
      paragraph:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      svgicon: <Icons2 />,
      heading: "Products",
      paragraph:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      svgicon: <Icons3/>,
      heading: "Approach",
      paragraph:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  const details = [
    {
      svgicon: <Icons4 />,
      heading: "Pricing",
      paragraph:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      svgicon: <Icons5 />,
      heading: "Delivery",
      paragraph:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      svgicon: <Icons6 />,
      heading: "Support",
      paragraph:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <>
      <div className="choosepart_setting">
        <div className="choose_heading">
<Rapeting heading='Why Choose Us'paragraph='Lorem ipsum dolor sit amet'/>
        </div>
        <div className="choose_data">
        <div className="callChosseCard1">
          {information.map((item, index) => (
            <ChooseCard1
              key={index}
              svgicon={item.svgicon}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
        <div className="choosepartimg">
          <img src={IMAGES.FEATURES} alt="" />
        </div>
        <div className="callChosseCard2">
          {details.map((item, index) => (
            <ChooseCard2
              key={index}
              svgicon={item.svgicon}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
}

export default ChoosePart;
