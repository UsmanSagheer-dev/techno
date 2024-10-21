import React, { useState } from "react";
import Rapeting from "../rapetingdata/Rapeting";
import Button from "../button/Button";
import "./portfolio.css";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import { IMAGES } from "../../constants/Images";

function Portfolio() {
  const buttonData = [
    { title: "All", category: "all" },
    { title: "App Design", category: "appDesign" },
    { title: "App Development", category: "appDevelopment" },
    { title: "Branding", category: "branding" },
    { title: "IT Solutions", category: "itSolutions" },
  ];

  const buttonStyles = {
    backgroundColor: "#0765de",
    color: "white",
    fontSize: "20px",
    fontFamily: "sans-serif",
    padding: "10px 25px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    width: "auto",
    border: "none",
    justifyContent: "center",
    cursor: "pointer",
  };

  const allCardData = [
    {
      cardimage: IMAGES.PRODUCTS,
      cardheading: "App Design 1",
      cardparagraph: "Some app design content",
      category: "appDesign",
    },
    {
      cardimage: IMAGES.PRODUCTS1,
      cardheading: "App Development 1",
      cardparagraph: "Some app development content",
      category: "appDevelopment",
    },
    {
      cardimage: IMAGES.PRODUCTS2,
      cardheading: "Branding 1",
      cardparagraph: "Some branding content",
      category: "branding",
    },
    {
      cardimage: IMAGES.PRODUCTS3,
      cardheading: "IT Solutions 1",
      cardparagraph: "Some IT solutions content",
      category: "itSolutions",
    },
    {
      cardimage: IMAGES.PRODUCTS4,
      cardheading: "App Design 2",
      cardparagraph: "Some app design content",
      category: "appDesign",
    },
    {
      cardimage: IMAGES.PRODUCTS5,
      cardheading: "Branding 2",
      cardparagraph: "Some branding content",
      category: "branding",
    },
  ];

  const [filteredCards, setFilteredCards] = useState(allCardData);

  const filterCards = (category) => {
    if (category === "all") {
      setFilteredCards(allCardData);
    } else {
      const filtered = allCardData.filter((card) => card.category === category);
      setFilteredCards(filtered);
    }
  };

  return (
    <div className="mainportfolio">
      <div className="portfolioheading">
        <Rapeting
          heading="Our Portfolio"
          paragraph="Check out our amazing portfolio!"
        />
      </div>
      <div className="portfolioButton">
        {buttonData.map((button, index) => (
          <button
            key={index}
            style={buttonStyles}
            onClick={() => filterCards(button.category)}
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="set_portfolio-card">
        {filteredCards.length > 0 ? (
          filteredCards.map((item, index) => (
            <PortfolioCard
              key={index}
              cardimage={item.cardimage}
              cardheading={item.cardheading}
              cardparagraph={item.cardparagraph}
            />
          ))
        ) : (
          <p>No cards available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
