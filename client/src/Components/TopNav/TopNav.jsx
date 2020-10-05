import React from 'react';
import './topnav.style.scss';
import Logo from '../../resources/logo-symbol.svg';

function TopNav() {

  return (
    <div className="topnav-wrapper">
      <img src={Logo} alt="Helpful Human" />
      <input type="text" placeholder='Search' />
    </div>
  );
}

export default TopNav;