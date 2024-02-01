import React from 'react';
import './MenuItem.css';

import './MenuItem.css';

const MenuItem = ({ title, price, tag }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-head_title">
        <p>{title}</p>
      </div>
      <div className="app__menuitem-head_dash" />
      <div className="app__menuitem-head_price">
        <p>{price}</p>
      </div>
    </div>

    <div className="app__menuitem-tag">
      <p>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
