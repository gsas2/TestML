import React from 'react';
import PropTypes from 'prop-types';
import FreeShippingIcon from '../../../common/assets/ic_shipping.png';
import FreeShippingIconX2 from '../../../common/assets/ic_shipping@2x.png.png';
import './PriceBox.css';

const PriceBox = ({condition, itemsSold, title, price}) => (
  <div className="priceBox">
    <div className="extraDetails">
      <span className="condition">Nuevo</span>
      -
      <span className="itemsSold">234 Vendidos</span>
      <img className="freeShipping"
            src={FreeShippingIcon}
            srcSet={[`${FreeShippingIcon} 1x`, `${FreeShippingIconX2} 2x`]}
            alt="Envío Gratis" />
    </div>
    <div className="title">Deco Reverse Sombrero Oxford</div>
    <div className="price">
      $ 1.980<span className="decimals">00</span>
    </div>
    <button>Comprar</button>
  </div>
);

PriceBox.propTypes = {
  condition: PropTypes.string.isRequired,
  itemsSold: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired
};

export default PriceBox;
