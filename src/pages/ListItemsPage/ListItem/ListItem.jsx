import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import FreeShippingIcon from './ic_shipping.png';
import FreeShippingIconX2 from './ic_shipping@2x.png.png';

const ListItem = ({product}) => (
  <div className="listItem">
    <div className="imageContainer">
      <img src={product.picture} alt="Product" />
    </div>
    <div className="detailsContainer">
      <div className="price">
        {product.price.currency} {new Intl.NumberFormat().format(product.price.amount)} {product.price.decimals || ''}
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
