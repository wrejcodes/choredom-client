import React, {Component} from 'react';
import { Well, Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FormattedRelative } from 'react-intl';
import { emojify } from 'react-emojione';
import './Chore.css';

class Chore extends Component{

	render(){

		const { user, current_user, chore, group, users} = this.props; // info props
		const {handleSteal, handleBuyOutChore, handleCompleteChore, handleAwardPoints, handleSpendPoints} = this.props;
		const {style, text} = user.id === current_user ? {style:'success',text:'Complete'} : {style:'warning',text:'Steal'};

		let stealOrCompleteClick = null; 
		if(chore.belongsToUser === current_user){
			stealOrCompleteClick = (choreId, userId, group, chore)=>{
				let points = chore.points.worth;
				handleCompleteChore(choreId); 
				handleAwardPoints(group,userId,points)
			}
		} else {
			stealOrCompleteClick = (choreId, userId)=>{
				handleSteal(choreId, userId);
			}
		} 

		let activeOwner;  
		users.forEach((user)=>{
			if(user.id === chore.belongsToUser){
				activeOwner =  user.name;
			}
		})

		let randomId = (users) =>{

			let temp_array = users.filter((user)=>{
				return user.id !== current_user;
			})
			let id =  temp_array[Math.floor((Math.random() * temp_array.length))].id;
			console.log(id);
			return id;

		}

		let stealOrComplete = null; // incase it can't be stolen again
		stealOrComplete = (chore.points.steal > 0 || chore.belongsToUser === current_user) && <Button bsStyle={style} 
																								onClick={() => { stealOrCompleteClick(chore.id, current_user, group.id,chore)}}>
																								<i className="fa fa-star"/> {text}
																						</Button>
		let stealItem = null;
		let buyOut = null;
		stealItem = chore.points.steal > 0 && <ListGroupItem>Steal to earn: {chore.points.steal - chore.points.worth} extra points</ListGroupItem>;
		buyOut = group.points[`${user.id}`] >= chore.points.worth && <Button bsStyle={'danger'} onClick={()=>{handleBuyOutChore(chore.id, randomId(users)); handleSpendPoints(group.id,current_user,chore.points.buy)}}><i className="fa fa-gift"/> Reassign</Button>;
		return(
			<Well className="Chore-container" large>

				<Panel header={<h1><span className="green">{chore.name}</span></h1>}>
					<ListGroup>
						<ListGroupItem>Description: {emojify(chore.description)}</ListGroupItem>
						<ListGroupItem>Due: <FormattedRelative value={chore.endTime}/></ListGroupItem>
						<ListGroupItem>Belongs to: {activeOwner}</ListGroupItem>
						<ListGroupItem>Worth: {chore.points.worth} points</ListGroupItem>
						<ListGroupItem>Buy out: {chore.points.buy} points</ListGroupItem>
						{stealItem}
						
					</ListGroup>
				</Panel>
				{stealOrComplete}
				{(chore.belongsToUser === current_user && group.points[`${current_user}`] > chore.points.buy) && buyOut }
			</Well>
		);
	}
}

export default Chore;
