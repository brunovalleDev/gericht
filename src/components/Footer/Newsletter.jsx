import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className="app__footer-newsletter">
    <div className="app__footer-newsletter_heading">
      <SubHeading title="Newsletter" />
      <h2>Subscribe to Our Newsletter</h2>
      <p>And never miss latest Updates!</p>
    </div>

    <div className="app__footer-newsletter_email">
      <input type="email" placeholder='Email Address' />
      <button type='button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
