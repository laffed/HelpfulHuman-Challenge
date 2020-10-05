import React from 'react';
import './topnav.style.scss';
import Logo from '../../resources/logo-symbol.svg';
import {Link} from 'react-router-dom';

function TopNav() {

  return (
    <div className="topnav-wrapper">
      <Link to='/'>
        <img src={Logo} alt="Helpful Human" />
      </Link>
      <input type="text" placeholder='Search' />
    </div>
  );
}

export default TopNav;