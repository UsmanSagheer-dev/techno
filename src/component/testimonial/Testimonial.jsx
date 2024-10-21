import React from 'react'
import Rapeting from '../rapetingdata/Rapeting'
import './testimonial.css'

import CardCarousel from '../imagecarousel/CardCarousel'

function Testimonial() {
  return (
  <>
  <div className="testimonialSetting">
    <div className="testimonialHeading">
        <Rapeting heading='Testimonials'
        paragraph='Lorem ipsum dolor sit amet'/>
    </div>
    <div className="testimonialCarousal">
        <CardCarousel/>
    </div>
  </div>
  </>
  )
}

export default Testimonial
