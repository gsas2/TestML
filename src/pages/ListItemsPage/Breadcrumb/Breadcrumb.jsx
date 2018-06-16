import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css';

const Breadcrumb = ({categories}) => (
  <ul className="breadcrumb">
    {categories.map((category, index) => (
      <li key={index}>
        {category}
        {index+1 < categories.length ? <span className="separator">></span> : null}
      </li>
    ))}
  </ul>
);

Breadcrumb.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Breadcrumb;

