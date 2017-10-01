import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import LoginForm  from '../Login/LoginForm.js';
import './Login.css';


class Login extends Component{

	render(){
		return(
			<div className="container">
				<LoginForm />
			</div>
		);
	}
}

export default Login;