import React from 'react';
import PropTypes from 'prop-types';
import MeLiPrice from '../../../common/components/MeLiPrice/MeLiPrice'
import FreeShippingIcon from '../../../common/assets/ic_shipping.png';
import FreeShippingIconX2 from '../../../common/assets/ic_shipping@2x.png.png';
import './PriceBox.css';

const PriceBox = ({condition, itemsSold, freeShipping, title, price}) => (
  <div className="priceBox">
    <div className="extraDetails">
      <span className="condition">{condition}</span>
      <span className="separator">-</span>
      <span className="itemsSold">{itemsSold} {itemsSold === 1 ? 'Vendido' : 'Vendidos'}</span>
      { freeShipping &&
        <img className="freeShipping"
            src={FreeShippingIcon}
            srcSet={[`${FreeShippingIcon} 1x`, `${FreeShippingIconX2} 2x`]}
            alt="Envío Gratis" />
      }
    </div>
    <div className="title">{title}</div>
    <div className="price">
      <MeLiPrice currency={price.currency} amount={price.amount} decimals={price.decimals} />
    </div>
    <button>Comprar</button>
  </div>
);

PriceBox.propTypes = {
  condition: PropTypes.string.isRequired,
  itemsSold: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired
};

export default PriceBox;
