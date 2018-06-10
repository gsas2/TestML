import React, { Component } from 'react';
import Routes from '../Routes';
import Logo from './Logo_ML.png';
import Logo2X from './Logo_ML@2x.png.png';

import SearchComponent from "./SearchComponent/SearchComponent";
//import './App.css';

class MainLayout extends Component {
  // state = {
  //   response: ''
  // };

  render() {
    return (
      <div>
        <header>
          <img 
            src={Logo} 
            srcSet={[`${Logo} 1x`, `${Logo2X} 2x`]}
            alt="MeLi Logo" />
          <SearchComponent />
        </header>
        <div>
          <Routes />
        </div>
      </div>
    );
  }  
}

export default MainLayout;