import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import "antd/dist/antd.css";
import store from './store';

class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    store.dispatch({type:'INCREMENT'})
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="vertical"
          theme = "light"
        >
          <Menu.Item key="mail">
            <Link to="/home"><Icon type="mail" />Home</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/about"><Icon type="appstore" />About</Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Link to="/detail"><Icon type="appstore" />Detail</Link>
          </Menu.Item>
        </Menu>
        {this.props.children}
        {/* <div onClick={this.handleClick}>{store.getState()}</div> */}
      </div>
    )
  }
}

export default App;

