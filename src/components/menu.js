import React from 'react';
import './menu.css';
import MenuContent from './menucontent';
import wave from '../assets/Cloudy.svg';

const Menus = () => {
  return (
    <>
      <section className="coffee-message-section">
        <div className="content-wrapper">
          <div className="message-container">
            <h1 className="main-heading">Feeling blue?</h1>
            <p className="sub-text">It's time to take your coffee.</p>
          </div>
          <img src={wave} alt="Cloud design" className="cloud-img" />
        </div>
      </section>
      <MenuContent />
    </>
  );
};

export default Menus;
