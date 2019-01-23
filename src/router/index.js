
import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
 
 
// 1.引入组件
import App from '../App.js';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
 
 
// 2.构建路由
const Routes = (
	<Router>
        <App>
            <Switch>
                <Route path="/index" component={Home}></Route>
                <Route path = "/home" component = {Home}></Route>
                <Route path = "/about" component = {About}></Route>
                <Redirect from="/" to="/index"/> {/*重定向*/}
            </Switch>
        </App>
	</Router>
)

export default Routes;