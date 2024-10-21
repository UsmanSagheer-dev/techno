import React from "react";
import './footercontent.css'
function FooterContent({heading, locationicon, paragraph }) {
  return (
    <>
      <div className="footercontentset">
       
        <div className="content_para">
        <p>{locationicon}</p>
        <p>{paragraph}</p>
        </div>
       
      </div>
    </>
  );
}

export default FooterContent;
