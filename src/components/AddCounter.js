import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './AddCounter.css';

class AddCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    const { className, onAdd, ...props} = this.props;
    return (
      <form {...props} className={cnames("AddCounter", className)} onSubmit={this.handleSubmit}>
        <input className="AddCounter-title" type="text" value={this.state.title} onChange={this.handleTitleChange} />
        <input className="AddCounter-button" type="submit" value="Add Counter" />
      </form>
    );
  }
};

AddCounter.propTypes = {
  onAdd: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AddCounter;
