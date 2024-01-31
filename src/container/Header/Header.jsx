import React from 'react';
import images from '../../constants/images'
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className="app__header">
    <div className="app__header-content">
      <SubHeading title="Chase The New Flavour" imgUrl={images.spoon} />
      <h1 className="app__header-content_title">The Key to Fine dining</h1>
      <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button'>Explore Menu</button>
    </div>

    <div className="app__header-content_img">
      <img src={images.welcome} alt="header__img" />
    </div>
  </div>
);

export default Header;
