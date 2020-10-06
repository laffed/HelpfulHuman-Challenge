import React from 'react';
import './quickcolor.style.scss';
import {useHistory} from 'react-router-dom';

function QuickColor(props) {
  let history = useHistory();

  const toDetail = e => {
    e.preventDefault();
    history.push({
      pathname: `/detail/${props.hex}`
    });
  }

  return (
    <>
      <p className="quick-color" onClick={toDetail} >{props.color}</p>
    </>
  );
}

export default QuickColor;
