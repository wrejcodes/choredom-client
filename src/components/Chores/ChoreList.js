import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import {emojify} from 'react-emojione';
import './ChoreList.css';

class ChoreList extends Component{
  render(){
    let { chores} = this.props;
    let chore_array = chores.map( (chore, index) =>(
      <ListGroupItem key={index}> {chore.name}, {emojify(chore.description)} </ListGroupItem>
    ))

    return(
      <div className="ChoreList-container">
        <Panel header="Your Chores" className="bar">
          <ListGroup fill>
            {chore_array}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

export default ChoreList;
