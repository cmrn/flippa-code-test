import React from 'react';
import App from '../components/App';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    counterStore.load();
  }

  render() {
    return <App {...this.props} counters={counterStore.counters} />;
  }
}

export default view(AppContainer);
