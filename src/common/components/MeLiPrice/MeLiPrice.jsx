import React from 'react';
import PropTypes from 'prop-types';
import './MeLiPrice.css';

const MeLiPrice = ({price}) => {
  const {currency, amount, decimals} = price;
  return (
    <div className="MeLiPrice">
      {new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency , minimumFractionDigits: 0}).format(amount)}
      {decimals ? <span className="decimals">{decimals}</span> : null}
    </div>
  );
};

MeLiPrice.propTypes = {
  price: PropTypes.object.isRequired
};

export default MeLiPrice;
