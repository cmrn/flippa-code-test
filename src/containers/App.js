import React from 'react';
import App from '../components/App';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    counterStore.load();
  }

  handleAdd(title) {
    counterStore.add(title);
  }

  render() {
    return <App 
      counters={counterStore.counters} 
      onAdd={this.handleAdd} 
      onChange={()=>{}}
    />;
  }
}

export default view(AppContainer);
