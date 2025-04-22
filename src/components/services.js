import React from 'react';
import './services.css';  // Make sure to style the component
import image1 from '../servicespics/B1.jpg';  
import image2 from '../servicespics/B2.jpg'; 
import image3 from '../servicespics/B3.jpg'; 
import image4 from '../servicespics/B4.jpg'; 

const Services = () => {
  return (
    <section className="services-section" id='services'>
      <div className="services-container">
        <h2 className="services-header">Our Services</h2>

        {/* Semi-cursive text */}
        <h3 className="semi-cursive-text">Let’s grow, one cup at a time.</h3>

            {/* Franchise Application Section - Cleaned Up */}
            <h3 className="franchise-title">FRANCHISE APPLICATION</h3>
            <p className="franchise-desc">
            Click here to explore franchise opportunities!{' '}
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc76vilyQqROgJVq4cXp8MufGZ3l9EquHtmoq263F6_yMtdaQ/viewform?fbclid=IwZXh0bgNhZW0CMTEAAR6x0iPwwhO-tWJuZMbDbotc-Z_shw-nJOMM-eEXsdAeLTM5pajvyOzhN6Su9Q_aem_1T7C_8i_YRHwIruadD2hNQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="franchise-link"
            >
                Click here to apply
            </a>
            </p>
            
        {/* Images Section - Display images in grid layout */}
        <div className="image-section">
          <div className="image-row">
            <img src={image1} alt="Service 1" className="service-image" />
            <img src={image2} alt="Service 2" className="service-image" />
          </div>
          <div className="image-row">
            <img src={image3} alt="Service 3" className="service-image" />
            <img src={image4} alt="Service 4" className="service-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
