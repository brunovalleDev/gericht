import React, { useState } from 'react';
import images from '../../constants/images';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Gericth__logo" />
      </div>

      <ul className="app__navbar-links">
        <li><a href="#">home</a></li>
        <li><a href="#">pages</a></li>
        <li><a href="#">contact us</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">landing</a></li>
      </ul>

      <div className="app__navbar-login">
        <p><a href="#">Log In / Registration</a></p>
        <div className="app__navbar-login_line">
          <img src={images.line} alt="navbar__line" />
        </div>
        <p><a href="#">Book Table</a></p>
      </div>

      <div className="app__navbar-mobile">
        <GiHamburgerMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className="app__navbar-mobile_overlay slide-bottom">
              <MdOutlineRestaurantMenu className="app__navbar-mobile_overlay-close" size={27} onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-mobine_overlay-links">
                <li><a href="#" onClick={() => setToggleMenu(false)}>home</a></li>
                <li><a href="#" onClick={() => setToggleMenu(false)}>pages</a></li>
                <li><a href="#" onClick={() => setToggleMenu(false)}>contact us</a></li>
                <li><a href="#" onClick={() => setToggleMenu(false)}>blog</a></li>
                <li><a href="#" onClick={() => setToggleMenu(false)}>landing</a></li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Navbar;
