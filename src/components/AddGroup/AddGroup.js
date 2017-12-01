import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Radio, Button, SplitButton, MenuItem } from 'react-bootstrap';
import './AddGroup.css';
import {Link} from 'react-router-dom';

class AddGroupForm extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.validateName = this.validateName.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.state = {groupName: '', users: ''};
	}

	validateName()
	{
		let length = this.state.groupName.length;
		if(length === 0)
			return null;
		else if(length>=3)
		{
			return 'success';
		}
		else {
			return 'error';
		}
	}

	handleChange(fieldName, e){
		let stateObj = {};
		stateObj[fieldName] = e.target.value;
		this.setState(stateObj);
	}

	validateForm(){
		const fields = ['groupName' ];
		const states = [];
		let validated = true;

		fields.forEach((field)=>{
			if(field === 'groupName'){
				states.push(this.validateName());
			} 
		});

		states.forEach((state) =>{
			if(state !== 'success'){
				validated = false;
			}
		});

		return validated;

	}


	render(){
		let {current_user, users, handleSubmit} = this.props;

		return(
			<Form horizontal className="form-container">
				<FormGroup>
				      	<Col smOffset={4} sm={4}>
				        	<Link to = '/'> Back </Link>
				      	</Col>
			 	</FormGroup>
				<FormGroup controlId="Name your new group:" validationState={this.validateName()}>
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						Name your new group:
					</Col>
					<Col sm={4}>
						<FormControl type="groupName" placeholder="Group Name" onChange={(e)=>{this.handleChange('groupName', e)}}/>
					</Col>
				</FormGroup>
				<FormGroup controlId="List users to add to the new group: ">
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						List users to add to the new group:
					</Col>
					<Col sm={4}>
						<FormControl type="members" placeholder="Add usernames" onChange={(e)=>{this.handleChange('users', e)}}/>
					</Col>
				</FormGroup>

				{// <FormGroup controlId = "Group style">
				// 	<Col componentClass={ControlLabel}>
				// 		Group style:
				// 	</Col>
				// 	{' '}
				// 	<Radio name="radioGroup" inline>
				// 		Regular
				// 	</Radio>
				// 	<Radio name="radioGroup" inline>
				// 		Dictatorship
				// 	</Radio>
				// 	{' '}
				// </FormGroup>
				}

				<FormGroup controlId = "Assignment schedule">
					<Col componentClass={ControlLabel}>
						Chore assignment date:
					</Col>
					<SplitButton title="Day of week" id="bg-vertical-dropdown-1">
      						<MenuItem eventKey="1">Sunday</MenuItem>
      						<MenuItem eventKey="2">Monday</MenuItem>
      						<MenuItem eventKey="3">Tuesday</MenuItem>
      						<MenuItem eventKey="4">Wednesday</MenuItem>
      						<MenuItem eventKey="5">Thursday</MenuItem>
      						<MenuItem eventKey="6">Friday</MenuItem>
      						<MenuItem eventKey="7">Saturday</MenuItem>
    					</SplitButton>
					{' '}
					<Col componentClass={ControlLabel}>
						Assignmnet frequency:
					</Col>
					<SplitButton title="Frequency" id="bg-vertical-dropdown-1">
      						<MenuItem eventKey="1">Weekly</MenuItem>
      						<MenuItem eventKey="2">Bi-weekly</MenuItem>
      						<MenuItem eventKey="3">Monthly</MenuItem>
    					</SplitButton>
				</FormGroup>

				{// <FormGroup>
			 //      		<Col smOffset={4} sm={4}>
			 //        		<Checkbox>And click this box, for some reason</Checkbox>
			 //      		</Col>
			 //    	</FormGroup>
				}
			    	<FormGroup>
			    	  	<Col smOffset={4} sm={4}>
			    		    	<Button type="submit" onClick={(e)=>{
			    		    		e.preventDefault();
			    		    		if(this.validateForm){
			    		    			handleSubmit(this.state, current_user);
			    		    		}
			    		    	}}>
			    		     		Create Group
			    		    	</Button>
			    	  	</Col>
			   	 </FormGroup>
			</Form>
		);
	}
}

export default AddGroupForm
