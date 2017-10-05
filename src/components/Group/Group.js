import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import { FormattedRelative } from 'react-intl';
import './Group.css';

class Group extends Component{

	render(){

		let {match, users, chores, groups} = this.props;

		const groupId = parseInt(match.params.id, 10);

		const groupChores = chores.filter( (chore) => {
			return chore.belongsToGroup === groupId
		})
		let findGroup = () => {
			let temp = null;
			groups.forEach( (group) =>{
				if(group.id === groupId){
					temp = group;
				}
			})
			return temp;
		}

		const currentGroup = findGroup();

		const groupUsers = users.filter( (user) => {
			return currentGroup.userIDs.includes(user.id);
		});

		this.usersWithChore = groupUsers.map( (user) =>{
			let temp = [];
			let userChore = null;
			temp.push(user);
			groupChores.forEach( (chore) => {
				if(chore.belongsToUser === user.id){
					userChore = chore;
				}
			})
			temp.push(userChore);
			return temp; 
		});
		
		const tableRows = this.usersWithChore.map( (userAndChore, index) => {
			let name = userAndChore[0].name;
			let chore = userAndChore[1];
			return(<tr key={index}>
						<td>{name}</td>
						<td>{chore && chore.name}</td>
						<td>{chore && chore.description}</td>
						<td>{chore && <FormattedRelative value={chore.endTime}/>}</td>
				   </tr>);
		})

		return(
			<div className="Group-container container">
				<Table bordered condensed>
					<thead>
						<tr>
							<th>Users</th>
							<th>Chore for User</th>
							<th>Description for chore</th>
							<th>Due</th>
						</tr>
					</thead>
					<tbody>
						{tableRows}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Group;