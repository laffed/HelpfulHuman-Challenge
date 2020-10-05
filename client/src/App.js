import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import SideNav from './Components/SideNav/SideNav';
import TopNav from './Components/TopNav/TopNav';

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
