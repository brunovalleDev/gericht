import React from 'react';
import images from '../../constants/images';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';
import data from '../../constants/data';

const SpecialMenu = () => {
  const wines = data.wines;
  const cocktails = data.cocktails;
  return (
    <div className="app__menu">
      <div className="app__menu-heading">
        <SubHeading title="Menu that fits you palatte" />
        <h2>Today’s Special</h2>
      </div>

      <div className="app__menu-container">
        <div className="app__menu-container_wines">
          <h3>Wine & Beer</h3>

          <div className="app__menu-container_wines-items">
            {
              wines.map((wine, index) => <MenuItem title={wine.title} price={wine.price} tag={wine.tags} key={`${wine.title} - ${index}`} />)
            }
          </div>
        </div>

        <div className="app__menu-container_img">
          <img src={images.menu} alt="menu__laurels" />
        </div>

        <div className="app__menu-container_cocktails">
          <h3>Cocktails</h3>
          <div className="app__menu-container_cocktails-items">
            {
              cocktails.map((cocktail, index) => <MenuItem title={cocktail.title} price={cocktail.price} tag={cocktail.tags} key={`${cocktail.title} - ${index}`} />)
            }
          </div>
        </div>
      </div>

      <div className="app__menu-button">
        <button type="button">View More</button>
      </div>
    </div>
  )
};

export default SpecialMenu;
