import React, {Component} from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import {Route, Switch} from 'react-router-dom';


class Main extends Component{

	render(){
		return(
			<main className="main-container">
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/login" component={Login} />
					<Route path="*" component={NotFound} />
				</Switch>
			</main>
		);
	}
}

export default Main;