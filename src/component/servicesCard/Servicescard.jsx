import React from 'react';
import { ReactComponent as ServiceDesignIcon } from '../../assets/svg/service-design.svg';
import { ReactComponent as ServiceHostingicon } from '../../assets/svg/service-hosting.svg';
import { ReactComponent as ServiceSocialicon } from '../../assets/svg/service-social.svg';
import { ReactComponent as ServiceSeo } from '../../assets/svg/service-seo.svg';
import { ReactComponent as ServiceCloud } from '../../assets/svg/service-cloud.svg';
import { ReactComponent as ServiceSecure } from '../../assets/svg/service-secure.svg';
import Card from '../card/Card';
import './servicescard.css'
function Servicescard() {
  const information = [{
    svgicon: <ServiceDesignIcon />, // Use the SVG as a component
    heading: 'Application Design',
    paragraph: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    svgicon: <ServiceHostingicon/>, // Use the SVG as a component
    heading: 'Web Hosting',
    paragraph: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    svgicon: <ServiceSocialicon />, // Use the SVG as a component
    heading: 'Social Media',
  paragraph: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    svgicon: <ServiceSeo />, // Use the SVG as a component
    heading: 'Seo Optimization',
   paragraph: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    svgicon: < ServiceCloud/>, // Use the SVG as a component
    heading: 'Cloud Server',
  paragraph: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    svgicon: <ServiceSecure />, // Use the SVG as a component
    heading: 'Data Security',
   paragraph: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },

];

  return (
    <div className="servicesCard_set">
      {
        information.map((item, index) => (
          <Card
            key={index}
            svgicon={item.svgicon}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))
      }
    </div>
  );
}

export default Servicescard;
