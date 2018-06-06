import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './Total.css';

const Total = ({ total, className, ...props}) => (
  <div {...props} className={cnames("Total", className)}>
    Total: {total}
  </div>
);

Total.propTypes = {
  total: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default Total;