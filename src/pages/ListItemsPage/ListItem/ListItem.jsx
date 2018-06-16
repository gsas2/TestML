import React from 'react';
import './ListItem.css';
import FreeShippingIcon from './ic_shipping.png';
import FreeShippingIconX2 from './ic_shipping@2x.png.png';

const ListItem = () => (
  <div className="listItem">
    <div className="imageContainer">
      <img src="https://placeimg.com/180/180/any" alt="Product" />
    </div>
    <div className="detailsContainer">
      <div className="price">
        <span>$ 1.980</span>
        <img className="freeShipping"
              src={FreeShippingIcon}
              srcSet={[`${FreeShippingIcon} 1x`, `${FreeShippingIconX2} 2x`]}
              alt="Envío Gratis" />
      </div>
      <div className="description">Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!</div>
    </div>
    <div></div>
    <div className="locationContainer">
      Capital Federal
    </div>
  </div>
);

export default ListItem;
