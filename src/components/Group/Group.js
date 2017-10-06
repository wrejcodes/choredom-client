import React, {Component} from 'react';
import ChoreItem from '../../containers/ChoreItem';
import {Col, PageHeader, Row, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Group.css';

class Group extends Component{

	render(){

		let {match, users, chores, groups} = this.props;

		const groupId = parseInt(match.params.id, 10);

		const groupChores = chores.filter( (chore) => {
			return chore.belongsToGroup === groupId
		});

		let findGroup = () => {
			let temp = null;
			groups.forEach( (group) =>{
				if(group.id === groupId){
					temp = group;
				}
			})
			return temp;
		};

		const currentGroup = findGroup();

		const groupUsers = users.filter( (user) => {
			return currentGroup.userIDs.includes(user.id);
		});

		const findUser = (id) =>{
			let userToFind = null;
			groupUsers.forEach((user)=>{
				if(id === user.id){
					userToFind = user; 
				}
			})

			return userToFind;
		}

		this.usersWithChore = groupChores.map( (chore) =>{
			let temp = [];
			let user = findUser(chore.belongsToUser);
			temp.push(user);
			temp.push(chore);
			return temp; 
		});
		
		const choreArray = [];

		console.log(this.usersWithChore);

		this.usersWithChore.forEach( (userAndChore, index) => {
			let user = userAndChore[0];
			let chore = userAndChore[1];
			if( chore ){
				choreArray.push( 
				<Col md={4}>
					<ChoreItem 
					 key={index} 
					 user={user}
				     users={groupUsers}
					 chore={chore}
					 group={currentGroup} />
				</Col>);

			}
		});

		const userNameArray = groupUsers.map((user, index)=>{
			return <ListGroupItem key={index}>{user.name}</ListGroupItem>
		});

		const userPointArray = groupUsers.map((user, index)=>{
			return <ListGroupItem key={index}>{currentGroup.points[`${user.id}`]}</ListGroupItem>
		});

		return(
			<div className="Group-container container">
				<PageHeader className="header">
					{currentGroup.name}
				</PageHeader>
				<Row className="titleRow">
					<h3>Group Chores</h3>
				</Row>
				<Row>
					{choreArray}
				</Row>
				<Row className="titleRow">
					<h3>Group Members</h3>
				</Row>
				<Row>
					<Panel>
						<Col xs={6}>
							<ListGroup>
								<h4>Members</h4>
								{userNameArray}
							</ListGroup>
						</Col>
						<Col xs={6}>
							<ListGroup>
								<h4>Points</h4>
								{userPointArray}
							</ListGroup>
						</Col>
					</Panel>
				</Row>
			</div>
		);
	}
}

export default Group;