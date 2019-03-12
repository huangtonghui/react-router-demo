import React, { Component } from 'react';
import store from '../store';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home Page {store.getState()}
      </div>
    );
  }
}

export default Home;
