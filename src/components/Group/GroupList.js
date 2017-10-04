import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './GroupList.css';


class GroupList extends Component{
	render(){
		let { groups, users, current_user} = this.props;
		let group_array = groups.map( (group) =>(
			<ListGroupItem > {group.name} </ListGroupItem>
		))

		return(
			<div className="GroupList-container">
				<Panel header="Your groups">
					<ListGroup fill>	
						{group_array}
					</ListGroup>
				</Panel>
			</div>
		);
	}
}

export default GroupList;