import React from "react";

import "./portfoliocard.css";
function PortfolioCard({cardimage,cardheading,cardparagraph}) {
  return (
    <div>
      <div className="portfolioCard">
        <div class="card">
          <img src={cardimage} alt="" />
          <div className="card__content">
            <p className="card__title">{cardheading}</p>
            <p className="card__description">{cardparagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
