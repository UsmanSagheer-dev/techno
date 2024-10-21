import React from 'react'
import './footerservices.css'
function FooterService({heading,paragraph}) {
  return (
  <>
  <div className="servicesfooterheading">
    <div className="llll">
    <h1>{heading}</h1>
    </div>
    
    <div className="paragraphList">
        {paragraph.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
  </div>
  </>
  )
}

export default FooterService
