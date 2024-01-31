import React from 'react';
import { SubHeading } from '../../components/index';

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className="app__aboutus">
    <div className="app__aboutus-bg">
      <img src={images.G} alt="aboutus__g" />
    </div>
    <div className="app__aboutus-about">
      <div className="app__aboutus-about_heading">
        <h2>About Us</h2>
        <img src={images.spoon} alt="about__spoon" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type="button">Know More</button>
    </div>

    <div className="app__aboutus-img">
      <img src={images.knife} alt="aboutus__knife" />
    </div>

    <div className="app__aboutus-history">
      <div className="app__aboutus-history_heading">
        <h2>Our History</h2>
        <img src={images.spoon} alt="about__spoon" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type="button">Know More</button>
    </div>
  </div>
);

export default AboutUs;
