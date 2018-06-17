import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PriceBox from './PriceBox/PriceBox';
import './ItemDetailsPage.css';

const categories = [
  "Electrónica, Audio y Video",
  "Audio",
  "Audio Portátil  y Radios",
  "iPod",
  "Reproductores"
];

const ItemDetailsPage = (props) => (
  <div className="itemDetailsPage">
    
    {/* props.match.params.id */}
    <div className="breadcrumbContainer">
      <Breadcrumb categories={categories} />
    </div>
    <div className="detailsContainer">
      <div className="imageContainer">
        <img src="http://via.placeholder.com/680x680" alt="item" />
      </div>
      <PriceBox />
      <div className="descriptionContainer">
        <h1>Item Title</h1>
        <div className="description">Lorem ipsum bla ble bli...</div>
      </div>
    </div>
  </div>
);

export default ItemDetailsPage;
