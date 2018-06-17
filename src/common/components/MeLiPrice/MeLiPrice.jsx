import React from 'react';
import PropTypes from 'prop-types';
import './MeLiPrice.css';

const MeLiPrice = ({currency, amount, decimals}) => (
  <div className="MeLiPrice">
    {new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency , minimumFractionDigits: 0}).format(amount)}
    {decimals ? <span className="decimals">{decimals}</span> : null}
  </div>
);

MeLiPrice.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.number
};

export default MeLiPrice;
