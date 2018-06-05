import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const Counter = ({ title, count }) => (
  <div className="Counter">
    <button className="Counter-button Counter-delete"><FontAwesomeIcon color="crimson" icon={faTimes} /></button>
    <span className="Counter-title">{title}</span>
    <button className="Counter-button"><FontAwesomeIcon icon={faMinus} /></button>
    <span className="Counter-count">{count}</span>
    <button className="Counter-button"><FontAwesomeIcon icon={faPlus} /></button>
  </div>
);

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Counter;
