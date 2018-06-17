import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import FreeShippingIcon from '../../../common/assets/ic_shipping.png';
import FreeShippingIconX2 from '../../../common/assets/ic_shipping@2x.png.png';
import MeLiPrice from '../../../common/components/MeLiPrice/MeLiPrice';

const ListItem = ({product}) => (
  <div className="listItem">
    <div className="imageContainer">
      <img src={product.picture} alt="Product" />
    </div>
    <div className="detailsContainer">
      <div className="price">
        <MeLiPrice
          currency={product.price.currency}
          amount={product.price.amount}
          decimals={product.price.decimals} />
        { product.free_shipping && 
          <img className="freeShipping"
            src={FreeShippingIcon}
            srcSet={[`${FreeShippingIcon} 1x`, `${FreeShippingIconX2} 2x`]}
            alt="Envío Gratis" />
        }
      </div>
      <div className="title">{product.title}</div>
    </div>
    <div></div>
    <div className="locationContainer">
      {product.location}
    </div>
  </div>
);

ListItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ListItem;
