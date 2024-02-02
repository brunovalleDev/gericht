/* Essa foi a única classe na qual não utilizei um arquivo CSS e sim somente CSS inline e classes que foram pré definidas em App.css. A ideia é mostrar ao recrutrador que sei como utilizar essas classes pré-definidas de forma eficiente. O restante do projeto esta feito sem essas classes. */

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css'

const FindUs = () => (
  <div className="app__findus">
    <div className="app__findus-content">
      <div className="app__findus-heading">
        <SubHeading title="Contact" />
        <h2>Find Us</h2>
      </div>
      <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0 1rem' }}>Opening Hours</p>
      <p className="p__opensans" style={{ marginBottom: '1rem' }}>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>

      <button type="button" className="custom__button">Visit Us</button>
    </div>

    <div className="app__findus-img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div >
);

export default FindUs;