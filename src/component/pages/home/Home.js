import React from 'react';
import Navbar from '../../navbar/Navbar';
import Landing from '../../landing/Landing';
import ParticlesComponent from '../../particles/ParticlesComponent';
import Footer from '../../footer/Footer';
import './home.css';
import Servicescard from '../../servicesCard/Servicescard';
import ChoosePart from '../../choosepart/ChoosePart';
import Portfolio from '../../portfolio/Portfolio';
import PricingPlane from '../../pricingplane/PricingPlane';
import Testimonial from '../../testimonial/Testimonial';
import ClientsSection from '../../clientssection/ClientsSection';
import Imagesection from '../../imagesection/Imagesection';
import Team from '../../team/Team';
import Faqssection from '../../faqssection/Faqssection';
import Projectsection from '../../projectssection/Projectsection';
import Blogs from '../../blogs/Blogs';
import ContactSection from '../../contactsection/ContactSection';

export default function Home() {
  return (
    <div className='homemain'>
      <div id="landing" className="aldk">
        <Landing />
      </div>
      <div id="services" className="servicespart">
        <Servicescard />
      </div>
      <div id="choose-part" className="choosepart">
        <ChoosePart />
      </div>
      <div id="portfolio" className="portfolio_set">
        <Portfolio />
      </div>
      <div id="pricing" className="pricing" style={{ backgroundColor: 'transparent' }}>
        <PricingPlane />
      </div>
      <div id="testimonials" className="Testimonials">
        <Testimonial />
      </div>
      <div id="clients" className="client">
        <ClientsSection />
      </div>
      <div id="image-section" className="imagesection">
        <Imagesection />
      </div>
      <div id="team" className="teamsection">
        <Team />
      </div>
      <div id="faqs" className="faqsection">
        <Faqssection />
      </div>
      <div id="projects" className="project">
        <Projectsection />
      </div>
      <div id="blog" className="blog">
        <Blogs />
      </div>
      <div id="contact" className="contact">
        <ContactSection />
      </div>
      <div className="footerinhome">
        <Footer />
      </div>
    </div>
  );
}
