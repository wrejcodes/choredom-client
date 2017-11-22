import React, {Component} from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import SignUp from '../SignUp/SignUp';
import NotFound from '../NotFound/NotFound';
import Dashboard from '../Dashboard/Dashboard';
// import Groups from '../Group/Groups';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import FlashMessages from '../../containers/FlashMessages';
import GroupInfo from '../../containers/GroupInfo';
import TestComponent from '../TestComponent/TestComponent';


class Main extends Component{
	render(){
		// this component will load different content based on the route that is
		// provided. If no path is matched 404 is loaded. - Will
		let { logged_in } = this.props
		return(
			<main className="main-container">
				<FlashMessages />
				<Switch>
					<Route exact path="/" component={ logged_in ? Dashboard : Welcome} />
					<Route exact path="/test" component={TestComponent} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/signup" component={SignUp} />
					<Route path="/groupInfo/:id" component={GroupInfo} />
					<Route path="*" component={NotFound} />
				</Switch>
			</main>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		logged_in: state.logged_in
	}
}

Main = withRouter(connect(mapStateToProps)(Main));
export default Main;
