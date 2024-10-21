import React from 'react';
import './card.css'
function Card({svgicon,heading,paragraph}) {
  return (
    <>
      <div className="card_setting">
        <div className="svg" style={{width:'100px',height:'100px',color:'white'}}>
        {svgicon}
        </div>
        <div className="card_heading">
          <h2>{heading}</h2>
        </div>
        <div className="card_paragraph">
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default Card;

