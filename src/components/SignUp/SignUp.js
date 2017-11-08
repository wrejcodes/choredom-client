import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Button } from 'react-bootstrap';
import './SignUp.css';

class SignUpForm extends Component {
	render(){
		return(
			<Form horizontal className="form-container">
			    <FormGroup controlId="formUsername">
			        <Col componentClass={ControlLabel} sm={2}>
			        	Username
			      	</Col>
			      	<Col sm={10}>
			        	<FormControl type="username" placeholder="User Name" />
			      	</Col>
			    </FormGroup>

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

                            <FormGroup controlId="formHorizontalPassword">
			      	<Col componentClass={ControlLabel} sm={2}>
			        	Confirm Password
			      	</Col>
			      	<Col sm={10}>
			        	<FormControl type="confirm password" placeholder="Re-enter Password" />
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={2} sm={10}>
			        	<Checkbox>I am not a robot</Checkbox>
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={2} sm={10}>
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
