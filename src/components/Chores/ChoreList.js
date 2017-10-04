import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import './ChoreList.css';

class ChoreList extends Component{
  render(){
    let { chores, current_group, current_user} = this.props;
    let chore_array = chores.map( (chore) =>(
      <ListGroupItem> {chore.name}, {chore.description} </ListGroupItem>
    ))

    return(
      <div className="ChoreList-container">
        <Panel header="Your Group's Chores">
          <ListGroup fill>
            {chore_array}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

export default ChoreList;
