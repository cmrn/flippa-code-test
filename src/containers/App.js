import React from 'react';
import App from '../components/App';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counters: [] };
  }

  componentDidMount() {
    this.setState({ counters: [{id: "asdf", title: "bob", count: 1}] });
  }

  render() {
    return <App counters={this.state.counters} />;
  }
}

export default AppContainer;
