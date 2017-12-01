import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import Groups from '../../containers/Groups';
import Chores from '../../containers/Chores';
import { Col } from 'react-bootstrap';
import './Dashboard.css'


class Dashboard extends Component{
	render(){
		let {logged_in} = this.props;
		return(
			<div className="Dashboard">
				<div>
					{
						logged_in ? (<Col md={6}><Groups /></Col>) : (<Redirect to="/" />)
					}
				</div>
				<div>	
					<Col md={6}>
						<Chores/>
					</Col>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		logged_in: state.logged_in
	}
}
Dashboard = connect(mapStateToProps)(Dashboard);
export default Dashboard;
