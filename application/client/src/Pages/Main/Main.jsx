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

  const goPage = e => {
    e.preventDefault();
    const intPage = +e.target.getAttribute('name');
    if (e.target.getAttribute('name') === 'prev') {
      if (+currPage > 1) {
        history.push({
          pathname: `/page/${currPage - 1}`
        });
      }
    } else if (e.target.getAttribute('name') === 'next') {
      if (+currPage < 30) {
        history.push({
          pathname: `/page/${currPage + 1}`
        });
      }
    } else {
      history.push({
        pathname: `/page/${intPage}`
      });
    }
  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [currPage]);

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
      <div className="pagination-container">
        <p name='prev' onClick={goPage} className="page">Prev</p>
        <p name='1' onClick={goPage} className="page">1</p>
        <p name='2' onClick={goPage} className="page">2</p>
        <p name='3' onClick={goPage} className="page">3</p>
        <p name='4' onClick={goPage} className="page">4</p>
        <p name='5' onClick={goPage} className="page">5</p>
        <p name='6' onClick={goPage} className="page">6</p>
        <p name='7' onClick={goPage} className="page">7</p>
        <p name='8' onClick={goPage} className="page">8</p>
        <p name='9' onClick={goPage} className="page">9</p>
        <p name='10' onClick={goPage} className="page">10</p>
        <p name='11' onClick={goPage} className="page">11</p>
        <p name='12' onClick={goPage} className="page">12</p>
        <p name='13' onClick={goPage} className="page">13</p>
        <p name='14' onClick={goPage} className="page">14</p>
        <p name='15' onClick={goPage} className="page">15</p>
        <p name='16' onClick={goPage} className="page">16</p>
        <p name='17' onClick={goPage} className="page">17</p>
        <p name='18' onClick={goPage} className="page">18</p>
        <p name='19' onClick={goPage} className="page">19</p>
        <p name='20' onClick={goPage} className="page">20</p>
        <p name='21' onClick={goPage} className="page">21</p>
        <p name='22' onClick={goPage} className="page">22</p>
        <p name='23' onClick={goPage} className="page">23</p>
        <p name='24' onClick={goPage} className="page">24</p>
        <p name='25' onClick={goPage} className="page">25</p>
        <p name='26' onClick={goPage} className="page">26</p>
        <p name='27' onClick={goPage} className="page">27</p>
        <p name='28' onClick={goPage} className="page">28</p>
        <p name='29' onClick={goPage} className="page">29</p>
        <p name='30' onClick={goPage} className="page">30</p>
        <p name='next' onClick={goPage} className="page">Next</p>
      </div>
    </div>
  );
}

export default Main;