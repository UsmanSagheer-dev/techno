import React from "react";
import PricingCard from "../pricingcard/PricingCard";
import Rapeting from "../rapetingdata/Rapeting";
import "./pricingplane.css";

function PricingPlane() {
  const pricingData = [
    {
      heading: "Basic",
      price: "$25",
      paragraphs: [
        "Unlimited GB Space",
        "30 Domain Names",
        "Free SSL",
        "Daily Backup",
        "Free Templates",
        "Free Email",
        "10 Databases",
        "Unlimited Email Address",
        "Live Support",
      ],
    },
    {
      heading: "Ali Plan",
      price: "$50",
      paragraphs: [
        "Unlimited GB Space",
        "30 Domain Names",
        "Free SSL",
        "Daily Backup",
        "Free Templates",
        "Free Email",
        "10 Databases",
        "Unlimited Email Address",
        "Live Support",
      ],
    },
    {
      heading: "Sara Plan",
      price: "$75",
      paragraphs: [
        "Unlimited GB Space",
        "30 Domain Names",
        "Free SSL",
        "Daily Backup",
        "Free Templates",
        "Free Email",
        "10 Databases",
        "Unlimited Email Address",
        "Live Support",
      ],
    },
  ];

  return (
    <div className="pricingSetting">
      <div className="pricingheading">
        <Rapeting heading="Pricing Plans" paragraph="Lorem ipsum dolor sit amet" />
      </div>
      <div className="pricingCard">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            heading={plan.heading}
            price={plan.price}
            paragraphs={plan.paragraphs}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingPlane;
