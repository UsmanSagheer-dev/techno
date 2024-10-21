import React from "react";
import { ICONS } from '../../constants/reacticon';
import './pricingcard.css'
import Button from "../button/Button";
function PricingCard({ heading,price, paragraphs }) {
  return (
    <div className="cardpricing">
      <div className="headercard5">
        <h1>{heading}</h1>
        <h3>{price}</h3>
        <div className="content-section1">
          {paragraphs.map((para, index) => (
            <div key={index} className="jjj">
              <h2>{ICONS.CHECK}</h2>
              <p>{para}</p>
            </div>
          ))}
        </div>
        <div className="pricingbutton">
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
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
