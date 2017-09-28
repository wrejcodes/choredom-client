import React, {Component} from 'react';
import './Main.css';
import Welcome from '../Welcome/Welcome';
import {Route} from 'react-router-dom';

class Main extends Component{

	render(){
		return(
			<main className="main-container">
				<Route exact path="/" component={Welcome} />
			</main>
		);
	}
}

export default Main;