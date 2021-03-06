import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
	render(){
		return(
			<Form horizontal className="form-container">
			    <FormGroup controlId="formHorizontalEmail">
			        <Col componentClass={ControlLabel} sm={2}>
			        	Email
			      	</Col>
			      	<Col sm={10}>
			        	<FormControl type="email" placeholder="Email" />
			      	</Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword">
			      	<Col componentClass={ControlLabel} sm={2}>
			        	Password
			      	</Col>
			      	<Col sm={10}>
			        	<FormControl type="password" placeholder="Password" />
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={2} sm={10}>
			        	<Checkbox>Remember me</Checkbox>
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={2} sm={10}>
			        	<Button type="submit">
			         		Sign in
			        	</Button>
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={2} sm={10}>
			        	<Link to = '/SignUp'> Don't have an account? Sign Up </Link>
			      	</Col>
			    </FormGroup>
			</Form>
		);
	}
}

export default LoginForm
