import React, {useEffect, useState} from 'react';
import './detail.style.scss';
import {useLocation, useHistory} from 'react-router-dom';
import axios from 'axios';
import ColorCard from '../../Components/ColorCard/ColorCard';

function Detail() {
  let location = useLocation();
  let pathArr = location.pathname.split('/');
  let hex = pathArr[pathArr.length - 1];
  let hexStr = `#${hex}`;
  let history = useHistory();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios({
      url: `/api/color-detail/${hex}`,
      method: 'GET'
    })
      .then(res => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const clearBtn = e => {
    e.preventDefault();
    history.push({
      pathname: '/'
    });
  }

  useEffect(() => {
    fetchData();
  }, [hex]);

  if (loading) {
    return (
      <div className="detail-wrapper">
        Loading...
      </div>
    );
  }

  if (data.length < 2) {
    return (
      <div className="detail-wrapper">
        Invalid Hex Code or Color Does Not Exist in the Database
      </div>
    )
  }

  return (
    <div className="detail-wrapper">
      <div className="big-card-container">
        <div className="big-card-color-box" style={{backgroundColor: hexStr}}>
        </div>
        <div className="big-card-title-container">
          <p className="big-card-title">
            {hexStr}
          </p>
        </div>
      </div>
      <div className="hues-row-container">
        {data.map(str => <ColorCard key={str} hexCode={`#${str}`} />)}
      </div>
      <div className="clear-btn-container">
        <button onClick={clearBtn} >Clear</button>
      </div>
    </div>
  );
}

export default Detail;
