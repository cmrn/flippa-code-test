import React from 'react';
import App from '../components/App';
import { getCounters } from '../api';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counters: [] };
  }

  async componentDidMount() {
    const counters = await getCounters();
    this.setState({ counters: counters });
  }

  render() {
    return <App counters={this.state.counters} />;
  }
}

export default AppContainer;
