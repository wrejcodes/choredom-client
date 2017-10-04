import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import LoginForm from '../Login/LoginForm';
import './Welcome.css';

class Welcome extends Component{

	render(){
		return(
			<div className="welcome container">
				<h1>Welcome to Choredom</h1>
				<Col md={6}>
					<h3>Choredom makes managing chores easy</h3>
					<p>Complete chores to earn points</p>
					<p>Spend points to offload unwanted chores</p>
				</Col>
				<Col md={6}>
					<LoginForm />
				</Col>
			</div>
		);
	}
}

export default Welcome;