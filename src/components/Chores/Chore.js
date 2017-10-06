import React, {Component} from 'react';
import { Well, Panel, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import {FormattedRelative} from 'react-intl';
import {emojify} from 'react-emojione';

class Chore extends Component{

	render(){
		const {user, current_user, chore} = this.props
		const {style, text} = user.id === current_user ? {style:'success',text:'Complete'} : {style:'warning',text:'Steal'}
		return(
			<Well className="Chore-container" large>

				<Panel header={<h1>{chore.name}</h1>}>
					<ListGroup>
						<ListGroupItem>Description: {emojify(chore.description)}</ListGroupItem>
						<ListGroupItem>Due: <FormattedRelative value={chore.endTime}/></ListGroupItem>
						<ListGroupItem>Belongs to: {user.name}</ListGroupItem>
						<ListGroupItem>Points: 50</ListGroupItem>
					</ListGroup>
				</Panel>
				<Button bsStyle={style}>{text}</Button>
			</Well>
		);
	}
}

export default Chore;