import React, {Component} from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import {Route} from 'react-router-dom';


class Main extends Component{

	render(){
		return(
			<main className="main-container">
				<Route exact path="/" component={Welcome} />
				<Route path="/login" component={Login} />
			</main>
		);
	}
}

export default Main;