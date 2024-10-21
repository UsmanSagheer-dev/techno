import React from "react";
import './choosecard2.css'
function ChooseCard2({ heading, paragraph, svgicon }) {
  return (
    <>
      <div className="choosecard1_set1">
        <div className="chooseInformation1">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div>
        <div className="choosecardimg1">{svgicon}</div>
      </div>
    </>
  );
}

export default ChooseCard2;
