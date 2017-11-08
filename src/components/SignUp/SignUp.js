import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Button } from 'react-bootstrap';
import './SignUp.css';

class SignUpForm extends Component {
	render(){
		return(
			
			<Form horizontal className="form-container">
			    <FormGroup controlId="formUsername">
			        <Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Username
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="username" placeholder="User Name" />
			      	</Col>
			    </FormGroup>

                            <FormGroup controlId="formHorizontalEmail">
			        <Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Email
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="email" placeholder="Email" />
			      	</Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword">
			      	<Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Password
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="password" placeholder="Password" />
			      	</Col>
			    </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
			      	<Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Confirm Password
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="confirm password" placeholder="Re-enter Password" />
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={4} sm={4}>
			        	<Checkbox>I am not a robot</Checkbox>
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={4} sm={4}>
			        	<Button type="submit">
			         		Register
			        	</Button>
			      	</Col>
			    </FormGroup>


			</Form>
			
		);
	}
}

export default SignUpForm
