import React from 'react';
import { FooterOverlay, Newsletter } from '../../components/';
import images from '../../constants/images';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';


const Footer = () => (
  <div className="app__footer">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-container">
      <div className="app__footer-container_contact">
        <h4>Contact Us</h4>
        <p style={{ marginBottom: '0.5rem' }}>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>

      <div className="app__footer-container_gericht">
        <h3>Gerícht</h3>
        <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" style={{ margin: '1rem 0' }} />
        <div className="app__footer-container_gericht-icons">
          <FiFacebook color="#fff" size={20} />
          <FiTwitter color="#fff" size={20} />
          <FiInstagram color="#fff" size={20} />
        </div>
      </div>

      <div className="app__footer-container_hours">
        <h4>Working Hours</h4>
        <div className="app__footer-container_hours-week">
          <p>Monday-Friday:</p>
          <p style={{ marginBottom: '0.5rem' }}>08:00 am -12:00 am</p>
        </div>

        <div className="app__footer-container_hours-weekend">
          <p>Saturday-Sunday:</p>
          <p>07:00am -11:00 pm</p>
        </div>
      </div>
    </div>

    <div className="app__footer-copyright">
      <p>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div >
);

export default Footer;
