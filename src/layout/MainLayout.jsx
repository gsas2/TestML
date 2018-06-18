import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from '../Routes';
import Logo from './Logo_ML.png';
import Logo2X from './Logo_ML@2x.png.png';

import SearchComponent from "./SearchComponent/SearchComponent";
import './MainLayout.css';

const MainLayout = () => (
  <Router>
    <div>
      <header className="meli-header">
        <div className="content">
          <Link to="/">
            <img className="logo"
              src={Logo}
              srcSet={[`${Logo} 1x`, `${Logo2X} 2x`]}
              alt="MeLi Logo" />
          </Link>
          <SearchComponent />
        </div>
      </header>
      <div className="meli-body">
        <Routes />
      </div>
    </div>
  </Router>
);

export default MainLayout;
