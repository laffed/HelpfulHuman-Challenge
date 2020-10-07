import React, {useEffect, useState} from 'react';
import './main.style.scss';
import axios from 'axios';
import {useLocation, useHistory} from 'react-router-dom';

import ColorCard from '../../Components/ColorCard/ColorCard';

function Main() {
  let location = useLocation();
  let history = useHistory();

  const pathArr = location.pathname.split('/');
  const currPage = pathArr[pathArr.length - 1];

  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState([]);

  //<ColorCard hexCode={this color's hexcode}/> 

  const fetchData = () => {
    axios({
      url: `/api/colors/${currPage}`,
      method: 'GET'
    })
      .then(res => {
        const data = res.data.data;
        setPageData(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const changePage = e => {
    e.preventDefault();

  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        Loading
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <div className="cards-container">
        {pageData.map(str => <ColorCard key={str} hexCode={`#${str}`} />)}
      </div>
    </div>
  );
}

export default Main;