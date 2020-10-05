import React from 'react';
import './colorcard.style.scss';
import {useHistory} from 'react-router-dom';

function ColorCard(props) {
  let history = useHistory();

  const toColorDetail = e => {
    e.preventDefault();
    history.push({
      pathname: `/detail/${props.hexCode}`,
    });
  }

  return (
    <div className="color-card-wrapper" onClick={toColorDetail}>
      Color Card
    </div>
  );
}

export default ColorCard;