import React, {Component} from 'react';
import './Header.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Header extends Component{
	
	render(){
		return(
			<Navbar className="nav-container">
				<Navbar.Header>
					<Navbar.Brand><Link to='/' >Choredom</Link></Navbar.Brand>
				</Navbar.Header>
			</Navbar>
		);
	}

}

export default Header;