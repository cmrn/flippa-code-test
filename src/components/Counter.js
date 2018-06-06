import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './Counter.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const Counter = ({ title, count, onDecrement, onIncrement, onDelete, className, ...props }) => (
  <div {...props} className={cnames("Counter", className)}>
    <button className="Counter-button Counter-delete" aria-label="Delete" onClick={onDelete}>
      <FontAwesomeIcon color="crimson" icon={faTimes} />
    </button>
    <span className="Counter-title">{title}</span>
    <button className="Counter-button Counter-subtract" aria-label="Decrement" onClick={onDecrement}>
      <FontAwesomeIcon icon={faMinus} />
    </button>
    <span className="Counter-count">{count}</span>
    <button className="Counter-button Counter-add" aria-label="Increment" onClick={onIncrement}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </div>
);

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Counter;
