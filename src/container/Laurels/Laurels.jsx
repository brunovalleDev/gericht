import React from 'react';
import { SubHeading } from '../../components/index.js'
import data from '../../constants/data.js';
import './Laurels.css';
import images from '../../constants/images.js';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="app__laurels-content_awards-card">
      <div className="app__laurels-content_awards-card_img">
        <img src={imgUrl} alt='laurels__card' />
      </div>

      <div className="app__laurels-content_awards-card_description">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

const Laurels = () => {
  return (
    <div class="app__laurels">
      <div class="app__laurels-content">
        <div class="app__laurels-content_heading">
          <SubHeading title="Awards & recognition" />
          <h2>Our Laurels</h2>
        </div>

        <div className="app__laurels-content_awards">
          {
            data.awards.map((award, index) =>
              <AwardCard award={award} key={`${award.title} - ${index}`} />
            )
          }
        </div>
      </div>

      <div class="app__laurels-img">
        <img src={images.laurels} alt="laurels__img" />
      </div>
    </div>
  )
};

export default Laurels;
