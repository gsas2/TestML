import React from 'react';
import searchIcon from './ic_Search.png';
import searchIcon2X from './ic_Search@2x.png.png';
//import './App.css';

const SearchComponent = () => {
  const searchHandler = (event) => {
    //Redirect to Listing page with search param

  };

  return (
    <div>
      <input type="text" placeholder="Nunca dejes de buscar" />
      <button onClick={searchHandler}>
        <img
          src={searchIcon}
          srcSet={[`${searchIcon} 1x`, `${searchIcon2X} 2x`]}
          alt="search icon" />
      </button> 
    </div>
  );
};

export default SearchComponent;
