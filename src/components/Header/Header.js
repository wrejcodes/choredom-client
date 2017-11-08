import React, {Component} from 'react';
import './Header.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { sign_out } from '../../actions/';


class Header extends Component{
	render(){
		let {logged_in, handleSignOut} = this.props
		return(
			<Navbar className="nav-container">
				<Navbar.Header>
					<Navbar.Brand><Link to='/' > Choredom </Link></Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem onClick={()=>handleSignOut()}>Sign Out</NavItem>
				</Nav>
			</Navbar>
		);
	}

}

const mapStateToProps = (state) =>{
	return {
		logged_in: state.logged_in
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		handleSignOut: () => dispatch(sign_out())	
	}
}

Header = withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));

export default Header;
