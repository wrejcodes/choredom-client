import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Button } from 'react-bootstrap';
import './SignUp.css';
import {Link} from 'react-router-dom';

class SignUpForm extends Component {
	constructor(props){
		super(props);
		this.validateField = this.validateField.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.state = {firstName: '', lastName:'', username: '', email: '', password: '', confirm: ''};
	}

	validatePassword()
	{
		let passwordLength = this.state.password.length;
		let confirmLength = this.state.confirm.length;
		if(passwordLength === 0 && confirmLength === 0)
		{
			return null;
		}
		else if(passwordLength < 6 || confirmLength < 6)
		{
			return 'warning';
		}
		else
		{
			let p = this.state.password;
			let c = this.state.confirm;
			if(p == c)
			{
				return 'success';
			}
			else
			{
				return 'error';
			}
		}
	}

	validateField(fieldName){
		let length = this.state[fieldName].length;
		if(length === 0){
			return null;
		}
		if(length > 2){
			return 'success';
		} else {
			return 'error';
		}
	}

	validateEmail(){
		const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let length = this.state.email.length;
		if(length === 0){
			return null;
		} else {
			let regex = new RegExp(pattern);
			let match = regex.test(this.state.email);
			return match ? "success" : "error";
		}
	}

	validateForm(){
		const fields = ['firstName', 'lastName', 'username', 'email', 'password', 'confirm'];
		const states = [];
		let validated = true;

		fields.forEach((field)=>{
			if(field === 'email'){
				states.push(this.validateEmail());
			} else if( field === 'password' || field === 'confirm'){
				states.push(this.validatePassword());
			} else {
				// since we have to pass the field name as a parameter
				states.push(this.validateField(field));
			}
		});

		states.forEach((state) =>{
			if(state !== 'success'){
				validated = false;
			}
		});

		return validated;

	}

	handleChange(fieldName, e){
		let stateObj = {};
		stateObj[fieldName] = e.target.value;
		this.setState(stateObj);
	}

	render(){
		return(
			<Form horizontal className="form-container">
			<FormGroup controlId="firstName" validationState={this.validateField('firstName')}>
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						First Name
					</Col>
					<Col sm={4}>
						<FormControl type="firstName" placeholder="First Name" onChange={(e)=>{this.handleChange('firstName', e)}} value={this.state.firstName}  />
					</Col>
			</FormGroup>
			<FormGroup controlId="lastName" validationState={this.validateField('lastName')}>
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						Last Name
					</Col>
					<Col sm={4}>
						<FormControl type="lastName" placeholder="Last Name" onChange={(e)=>{this.handleChange('lastName', e)}}/>
					</Col>
			</FormGroup>


            	<FormGroup controlId="formHorizontalEmail" validationState={this.validateEmail()}>
			        <Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Email
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="email" placeholder="Email" value={this.state.email} onChange={(e)=>{this.handleChange('email', e)}}/>
			      	</Col>
			    </FormGroup>
				<FormGroup controlId="formUsername" validationState={this.validateField('username')}>
			        <Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Username
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="username" placeholder="User Name" onChange={(e)=>{this.handleChange('username', e)}}/>
			      	</Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword" validationState={this.validatePassword()}>
			      	<Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Password
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="password" placeholder="Password" onChange={(e)=>{this.handleChange('password', e)}}/>
			      	</Col>
			    </FormGroup>

                <FormGroup controlId="formHorizontalPassword" validationState={this.validatePassword()}>
			      	<Col componentClass={ControlLabel} sm={2} smOffset={3}>
			        	Confirm Password
			      	</Col>
			      	<Col sm={4}>
			        	<FormControl type="password" placeholder="Re-enter Password" onChange={(e)=>{this.handleChange('confirm', e)}}/>
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={4} sm={4}>
			        	<Checkbox>I am not a robot</Checkbox>
			      	</Col>
			    </FormGroup>

			    <FormGroup>
			      	<Col smOffset={4} sm={4}>
			        	<Button type="submit" onClick={(e)=>{
			        		e.preventDefault(); 
			        		// for now we are just logging the result of the form validation
			        		console.log(this.validateForm())
			        	}}>
			         		Register
			        	</Button>
			      	</Col>
			    </FormGroup>

                <FormGroup>
			      	<Col smOffset={4} sm={4}>
			        	<Link to = '/'> Sign in with an existing account </Link>
			      	</Col>
			    </FormGroup>

			</Form>
		);
	}
}

export default SignUpForm
