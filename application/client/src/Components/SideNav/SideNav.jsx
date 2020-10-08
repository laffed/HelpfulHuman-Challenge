import React from 'react';
import './sidenav.style.scss';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import QuickColor from './QuickColor/QuickColor';

function SideNav() {
  let history = useHistory();

  const sendRandom = e => {
    e.preventDefault();

    axios({
      url: '/api/random-color',
      method: 'GET'
    })
      .then(res => {
        const hex = res.data.data;
        history.push({
          pathname: `/detail/${hex}`
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="sidenav-wrapper">
      <button className="ran-btn" onClick={sendRandom}>
        Random Color
      </button>
      <div className="quick-color-container">
        <QuickColor color='Red' hex='ff0000' />
        <QuickColor color='Orange' hex='ff6600' />
        <QuickColor color='Yellow' hex='ffea00' />
        <QuickColor color='Green' hex='00ff00' />
        <QuickColor color='Blue' hex='0000ff' />
        <QuickColor color='Purple' hex='ff00ff' />
      </div>
    </div>
  );
}

export default SideNav;