import React from "react";
import './choosecard1.css'
function ChooseCard1({ heading, paragraph, svgicon }) {
  return (
    <>
      <div className="choosecard1_set">
        <div className="chooseInformation">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div>
        <div className="choosecardimg"style={{width:'50px' ,marginTop:'10px'}}>{svgicon}</div>
      </div>
    </>
  );
}

export default ChooseCard1;
