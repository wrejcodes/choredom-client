import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Button } from 'react-bootstrap';
import './AddChores.css';
import {Link} from 'react-router-dom';

class AddChores extends Component {
	constructor(props){
		super(props);
		this.validateName = this.validateName.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.validateDescription = this.validateDescription.bind(this);
		this.validatePoints=this.validatePoints.bind(this);
		this.validateForm=this.validateForm.bind(this);
		this.state = {choreName: '', description:'', points: ''};
	}
	validateName()
	{
		let length=this.state.choreName.length;
		if(length===0)
		return null;
		else if(length>=3)
		{
			return 'success';
		}
		else {
			return 'error';
		}
	}
	validateDescription()
	{
		let length=this.state.description.length;
		if(length===0)
		return 'null';
		else if(length>=3)
		{
			return 'success';
		}
		else {
			return 'error';
		}
	}
	validatePoints()
	{
		const pattern = /^([0-9])+$/;
		let length = this.state.points.length;

		if(length === 0){
			return null;
		} else {
			let regex = new RegExp(pattern);
			let match = regex.test(this.state.points);
			return match ? "success" : "error";
		}
	}

	validateForm(){
		const fields = ['choreName', 'description', 'points'];
		const states = [];
		let validated = true;

		fields.forEach((field)=>{
			if(field === 'choreName'){
				states.push(this.validateName());
			} else if( field === 'description'){
				states.push(this.validateDescription());
			} else if(field==='points'){
				// since we have to pass the field name as a parameter
				states.push(this.validatePoints());
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
			let {handleSubmit, match, closeModal} = this.props;
			let groupId = parseInt(match.params.id, 10);
		return(
			<Form horizontal className="form-container">
			<FormGroup controlId="choreName" validationState={this.validateName()}>
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						Name
					</Col>
					<Col sm={4}>
						<FormControl type="choreName" placeholder="Enter the chore name" onChange={(e)=>{this.handleChange('choreName', e)}} />
					</Col>
			</FormGroup>
			<FormGroup controlId="Description" validationState={this.validateDescription()}>
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						Description
					</Col>
					<Col sm={4}>
						<FormControl type="Description" placeholder="Enter the description" onChange={(e)=>{this.handleChange('description', e)}} />
					</Col>
			</FormGroup>

			<FormGroup controlId="Points" validationState={this.validatePoints()}>
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						Points
					</Col>
					<Col sm={4}>
						<FormControl type="Points" placeholder="Enter the points." onChange={(e)=>{this.handleChange('points', e)}} />
					</Col>
			</FormGroup>
			<FormGroup>
					<Col smOffset={4} sm={4}>
						<Button type="submit" onClick={(e)=>{
							e.preventDefault();
							// for now we are just logging the result of the form validation
							if(this.validateForm()){
								handleSubmit(this.state,groupId);
								closeModal();
							}
						}}>
							Add Chore
						</Button>
					</Col>
			</FormGroup>
			</Form>
		);
	}
}

export default AddChores
