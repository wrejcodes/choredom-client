import React, {Component} from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Dashboard from '../Dashboard/Dashboard';
// import Groups from '../Group/Groups';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import FlashMessages from '../../containers/FlashMessages';


class Main extends Component{
	constructor(props){
		super(props);
	}

	render(){
		// this component will load different content based on the route that is
		// provided. If no path is matched 404 is loaded. - Will
		let {current_user, logged_in} = this.props
		console.log(logged_in);
		return(
			<main className="main-container">
				<FlashMessages />
				<Switch>
					<Route exact path="/" component={ logged_in ? Dashboard : Welcome} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/login" component={Login} /> 
					<Route path="*" component={NotFound} />
				</Switch>
			</main>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		current_user: state.current_user,
		logged_in: state.logged_in
	}
}

Main = withRouter(connect(mapStateToProps)(Main));
export default Main;