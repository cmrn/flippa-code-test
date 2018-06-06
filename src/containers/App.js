import React from 'react';
import App from '../components/App';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

class AppContainer extends React.Component {
  componentDidMount() {
    counterStore.load();
  }

  render() {
    return <App {...this.props} counterIds={Object.keys(counterStore.counters)} />;
  }
}

export default view(AppContainer);
