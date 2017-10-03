import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{

	render(){
		return(
			// using bootstrap navbar-fixed-bottom to keep the footer at the bottom - Will
			// Date().getFullYear() for minimizing upkeep on footer
			<footer className="navbar-fixed-bottom Footer-container">
				&copy; Group 6 { new Date().getFullYear() } 
			</footer>
		);
	}
}

export default Footer;