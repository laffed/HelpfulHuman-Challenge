import React from 'react';
import './sidenav.style.scss';

function SideNav() {

  return (
    <div className="sidenav-wrapper">
      <button className="ran-btn">
        Random Color
      </button>
      <p className="quick-color">Red</p>
      <p className="quick-color">Orange</p>
      <p className="quick-color">Yellow</p>
      <p className="quick-color">Green</p>
      <p className="quick-color">Blue</p>
      <p className="quick-color">Purple</p>
      <p className="quick-color">Brown</p>
      <p className="quick-color">Gray</p>
    </div>
  );
}

export default SideNav;