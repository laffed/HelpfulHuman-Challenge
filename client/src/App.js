import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import SideNav from './Components/SideNav/SideNav';
import TopNav from './Components/TopNav/TopNav';

/*
OVERVIEW:

Main: 
Pagination 8 pages of 12 colors each - 96 segments of ranges
Total number of hex color is 16,777,216 possible colors
Therefore each color Main color will be about 174,762 hexidecimals apart

SideNav:
Review the design spec 
  Option 1: 
  Each base color Routes to detail page with base color hexcode

  Option 2: 
  Each base color shows a page in main (pagination) of all hues within the base color range of hex colors

*/

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-content">
          <div className="topnav-container">
            <TopNav />
          </div>
          <div className="body-content">
            <SideNav />
            <Routes />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
