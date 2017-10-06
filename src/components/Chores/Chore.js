import React, {Component} from 'react';
import { Well, Panel, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FormattedRelative } from 'react-intl';
import { emojify } from 'react-emojione';

class Chore extends Component{

	render(){
		const {user, current_user, chore, group} = this.props
		const {style, text} = user.id === current_user ? {style:'success',text:'Complete'} : {style:'warning',text:'Steal'};
		let stealItem = null;
		let buyOut = null;
		stealItem = chore.points.steal && <ListGroupItem>Steal to earn: {chore.points.steal - chore.points.worth} extra points</ListGroupItem>;
		buyOut = group.points[`${user.id}`] >= chore.points.worth && <Button bsStyle={'danger'}>Reassign</Button>;
		return(
			<Well className="Chore-container" large>

				<Panel header={<h1>{chore.name}</h1>}>
					<ListGroup>
						<ListGroupItem>Description: {emojify(chore.description)}</ListGroupItem>
						<ListGroupItem>Due: <FormattedRelative value={chore.endTime}/></ListGroupItem>
						<ListGroupItem>Belongs to: {user.name}</ListGroupItem>
						<ListGroupItem>Worth: {chore.points.worth} points</ListGroupItem>
						{stealItem}
						
					</ListGroup>
				</Panel>
				<Button bsStyle={style}>{text}</Button>
				{chore.belongsToUser === current_user && buyOut }
			</Well>
		);
	}
}

export default Chore;