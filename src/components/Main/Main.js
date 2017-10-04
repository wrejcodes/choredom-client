import React, {Component} from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
// import Groups from '../Group/Groups';
import {Route, Switch} from 'react-router-dom';
import FlashMessages from '../../containers/FlashMessages';


class Main extends Component{

	render(){
		// this component will load different content based on the route that is
		// provided. If no path is matched 404 is loaded. - Will
		return(
			<main className="main-container">
				<FlashMessages />
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