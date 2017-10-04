import React, {Component} from 'react';
import {connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import Groups from '../../containers/Groups';
import Chores from '../../containers/Chores';


class Dashboard extends Component{
	render(){
		let {logged_in} = this.props;
		return(
			<div>
			<div>
			{
			logged_in ? <Groups /> : (<Redirect to="/" />)
			}
			</div>
			<div>
			{
				<Chores/>
			}
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
Dashboard = withRouter(connect(mapStateToProps)(Dashboard));
export default Dashboard;
