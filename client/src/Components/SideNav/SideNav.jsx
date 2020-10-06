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
        {/* TODO Find Hexcode for basic colors */}
        <QuickColor color='Red' hex='ff0000' />
        <QuickColor color='Orange' hex='ff0000' />
        <QuickColor color='Yellow' hex='ff0000' />
        <QuickColor color='Green' hex='ff0000' />
        <QuickColor color='Blue' hex='ff0000' />
        <QuickColor color='Purple' hex='ff0000' />
        <QuickColor color='Brown' hex='ff0000' />
        <QuickColor color='Gray' hex='ff0000' />
      </div>
    </div>
  );
}

export default SideNav;