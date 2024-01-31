import React from 'react';
import './subHeading.css'
import images from '../../constants/images';

const SubHeading = ({ title }) => (
  <div className="app__header-content_subheading">
    <h2>{title}</h2>
    <img src={images.spoon} alt="subheading__spoon" />
  </div>
);

export default SubHeading;
