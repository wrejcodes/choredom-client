import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './GroupList.css';


class GroupList extends Component{
	render(){
		let { groups } = this.props;
		let group_array = groups.map( (group, index) => (
			<ListGroupItem key={index}><Link to={"/groupInfo/" + group.id}>{group.name}</Link></ListGroupItem>
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