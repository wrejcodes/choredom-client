import React, {Component} from 'react';
import {Col, Row, Image, GlyphIcon} from 'react-bootstrap';
import LoginForm from '../Login/LoginForm';
import './Welcome.css';
import dishes from './dish_washing.jpg';
import garbage from './garbage.jpg';
import laundry from './laundry.jpg';
import cleaning from './cleaning.jpg';

class Welcome extends Component{

	render(){
		return(
			<div className="welcome container">
				<Row className="Login-Row">
					<span className="centered"><Image src={cleaning} responsive/></span>
					<small>Free Vector Art by <a rel="nofollow" href="https://www.Vecteezy.com">Vecteezy!</a></	small>
					<h1 className="Welcome">Welcome to Choredom</h1>
					<Col md={6} className="Description">
						<h3>Choredom makes managing chores easy</h3>
						<h4><i className="fa fa-star" /> Complete chores to earn points. <i className="fa fa-star" /></h4>
						<h4><i className="fa fa-gift" /> Spend points to offload unwanted chores. <i className="fa fa-gift" /></h4>
					</Col>
					<Col md={6}>
						<LoginForm />
					</Col>
				</Row>
				<Row className="pictureRow">
					<Col md={2}>
						<Image src={dishes} responsive rounded/>
					</Col>
					<Col md={2}>
						<Image src={garbage} responsive rounded/>
					</Col>
					<Col md={2}>
						<Image src={laundry} responsive rounded/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Welcome;