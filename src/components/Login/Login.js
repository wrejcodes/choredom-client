import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import LoginForm  from '../Login/LoginForm.js';
import './Login.css';


class Login extends Component{

	render(){
		return(
			<div className="container">
				<Col md={6}>
					<h3>Please use the login form</h3>
					<p>This is some information</p>
				</Col>
				<Col md={6}>
					<LoginForm />
				</Col>
				
			</div>
		);
	}
}

export default Login;