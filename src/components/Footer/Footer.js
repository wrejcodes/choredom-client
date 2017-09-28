import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{

	render(){
		return(
			// using bootstrap navbar-fixed-bottom to keep the footer at the bottom
			<footer className="navbar-fixed-bottom Footer-container">
				&copy; Group 6 2017
			</footer>
		);
	}
}

export default Footer;