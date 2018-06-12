import React, { Component } from 'react';
import Routes from '../Routes';
import Logo from './Logo_ML.png';
import Logo2X from './Logo_ML@2x.png.png';

import SearchComponent from "./SearchComponent/SearchComponent";
import './MainLayout.css';

class MainLayout extends Component {
  // state = {
  //   response: ''
  // };

  render() {
    return (
      <div>
        <header className="meli-header">
          <div className="content">
            <img className="logo"
              src={Logo}
              srcSet={[`${Logo} 1x`, `${Logo2X} 2x`]}
              alt="MeLi Logo" />
            <SearchComponent />
          </div>
        </header>
        <div className="meli-body">
          <Routes />
        </div>
      </div>
    );
  }  
}

export default MainLayout;