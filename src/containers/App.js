import React from 'react';
import App from '../components/App';
import { getCounters, addCounter } from '../api';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counters: [] };

    this.handleAdd = this.handleAdd.bind(this);
  }

  async componentDidMount() {
    const counters = await getCounters();
    this.setState({ counters: counters });
  }

  async handleAdd(title) {
    const counters = await addCounter(title);
    this.setState({ counters: counters });
  }

  render() {
    return <App counters={this.state.counters} onAdd={this.handleAdd} />;
  }
}

export default AppContainer;
