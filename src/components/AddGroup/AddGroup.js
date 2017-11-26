import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Form, Col, Checkbox, Radio, Button, SplitButton, MenuItem } from 'react-bootstrap';
import './AddGroup.css';
import {Link} from 'react-router-dom';

class AddGroupForm extends Component {
	render(){
		return(
			<Form horizontal className="form-container">
				<FormGroup>
				      	<Col smOffset={4} sm={4}>
				        	<Link to = '/'> Back </Link>
				      	</Col>
			 	</FormGroup>
				<FormGroup controlId="Name your new group:">
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						Name your new group:
					</Col>
					<Col sm={4}>
						<FormControl type="groupName" placeholder="Group Name" />
					</Col>
				</FormGroup>
				<FormGroup controlId="List users to add to the new group: ">
					<Col componentClass={ControlLabel} sm={2} smOffset={3}>
						List users to add to the new group:
					</Col>
					<Col sm={4}>
						<FormControl type="members" placeholder="Add usernames"/>
					</Col>
				</FormGroup>

				<FormGroup controlId = "Group style">
					<Col componentClass={ControlLabel}>
						Group style:
					</Col>
					{' '}
					<Radio name="radioGroup" inline>
						Regular
					</Radio>
					<Radio name="radioGroup" inline>
						Dictatorship
					</Radio>
					{' '}
				</FormGroup>

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

				<FormGroup>
			      		<Col smOffset={4} sm={4}>
			        		<Checkbox>And click this box, for some reason</Checkbox>
			      		</Col>
			    	</FormGroup>

			    	<FormGroup>
			    	  	<Col smOffset={4} sm={4}>
			    		    	<Button type="submit">
			    		     		Create Group
			    		    	</Button>
			    	  	</Col>
			   	 </FormGroup>
			</Form>
		);
	}
}

export default AddGroupForm
