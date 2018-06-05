import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <form className="AddCounter" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        <input type="submit" value="Add Counter" />
      </form>
    );
  }
};

AddCounter.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddCounter;
