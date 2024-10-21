import React from "react";
import "./rapeting.css";
function Rapeting(props) {
  return (
    <div>
      <div className="repetingheading">
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Rapeting;
