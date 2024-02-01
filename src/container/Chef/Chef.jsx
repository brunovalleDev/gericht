import React from 'react';
import images from '../../constants/images';

import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className="app__chef">
    <div className="app__chef-container">
      <div className="app__chef-img">
        <img src={images.chef} alt="chef__img" />
      </div>

      <div className="app__chef-content">
        <div className="app__chef-content_heading">
          <SubHeading title="Chef’s Word" />
          <h2>What We Believe In</h2>
        </div>

        <div className="app__chef-content_testimonial">
          <div className="app__chef-content_testimonial-quote">
            <img src={images.quote} alt="chef__quote" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>

        <div className="app__chef-content_info">
          <p>Kevin Luo</p>
          <p>Chef & Founder</p>
        </div>

        <div className="app__chef-content_sign">
          <img src={images.sign} alt="chef__sign" />
        </div>
      </div>
    </div>

  </div>
);

export default Chef;
