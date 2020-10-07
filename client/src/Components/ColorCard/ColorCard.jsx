import React from 'react';
import './colorcard.style.scss';
import {useHistory} from 'react-router-dom';

function ColorCard(props) {
  let history = useHistory();

  const path = props.hexCode.replace('#', '');
  const toColorDetail = e => {
    e.preventDefault();
    history.push({
      pathname: `/detail/${path}`,
    });
  }

  return (
    <div className="color-card-wrapper" onClick={toColorDetail}>
      <div className="color-box" style={{backgroundColor: props.hexCode}}>
      </div>
      <p className="color-title">{props.hexCode}</p>
    </div>
  );
}

export default ColorCard;