import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

const NotFound = () =>{

	return(
		<div className="custom_404">
			<h1>404 Page not found </h1>
			<Link to="/"> Click here to return to home page </Link>
		</div>
	);
}

export default NotFound;