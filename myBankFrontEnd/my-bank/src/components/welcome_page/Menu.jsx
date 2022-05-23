import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";

import bankIcon from '../../images/bank.svg';
import cardIcon from '../../images/card.svg';
import personIcon from '../../images/person.svg';
import moneyIcon from '../../images/money.svg';
import loginIcon from '../../images/login.svg';
import logoutIcon from '../../images/logout.svg';
import registerIcon from '../../images/register.svg';

import workingImg from "../../images/undraw_working_remotely_re_6b3a.svg";
import examsImg from "../../images/undraw_exams_re_4ios.svg";
import tripImg from "../../images/undraw_trip_re_f724.svg";
import skateboardImg from "../../images/undraw_skateboard_re_we2n.svg";
import interiorImg from "../../images/undraw_interior_design_re_7mvn.svg";
import systemImg from "../../images/undraw_os_upgrade_re_r0qa.svg";
import reactImg from "../../images/undraw_react_re_g3ui.svg";
import servicesImg from "../../images/undraw_services_re_hu5n.svg";
import termImg from "../../images/undraw_term_sheet_re_ju7s.svg";

import '../../styles/App.css'
import '../../styles/Menu.css'

export default class Menu extends Component {

	constructor(props) {
		super(props);
		this.isUseLogged = this.isUseLogged.bind(this);
		this.logOut = this.logOut.bind(this);
		this.pickNewImage = this.pickNewImage.bind(this);
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	getImg() {
		switch (this.getRandomInt(0, 8)) {
			case 0: return workingImg;
			case 1: return examsImg;
			case 2: return tripImg;
			case 3: return skateboardImg;
			case 4: return interiorImg;
			case 5: return systemImg;
			case 6: return reactImg;
			case 7: return termImg;
		}
	}

	pickNewImage() {
		document.getElementById("undrawImg").src = this.getImg();
	}


	componentDidMount() {
		this.pickNewImage();
	}


	render() {
		return (
			<div className="main">
				<div className="titles">
					<label>
						<img src={bankIcon} alt="Bank" className="icons-menu" id="bank-icon" />
						Welcome to MyBank.com
					</label>
				</div>
				<div className="content-c" >
					<div
						onClick={
							() => this.pickNewImage()
						}
						className="undraw"
						id="welcomeImg"
					>
						<img
							alt="img"
							id="undrawImg"
						/>
					</div>
					<div className="menu-buttons">
						{this.isUseLogged() ?
							<>
								<button
									className="login-buttons"
									onClick={
										() => {
											this.props.navigate("/registration/new-customer")
										}
									}
								>
									<h3>
										<img src={registerIcon} alt="Register" className="icons-menu" />
										Register
									</h3>
								</button>
								<button
									className="login-buttons"
									onClick={
										() => {
											this.props.navigate("/login")
										}
									}>
									<h3>
										<img src={loginIcon} alt="Login" className="icons-menu" />
										Login
									</h3>
								</button>
							</>
							:
							<>
								<button
									className="path-button"
									onClick={this.logOut}
								>
									<img src={logoutIcon} alt="Log out" className="icons-menu" />
									Log Out
								</button>

								<button
									className="path-button"
									onClick={
										() => {
											Connect.getUserSpecificInfo(SessionStore.getData("loggedUserId"), "username").then(
												response => { this.props.navigate(`/customer/${response.data}/info/balance`) }
											)
										}
									}
								>
									<img src={cardIcon} alt="Balance" className="icons-menu" />
									My Balance
								</button>

								<button
									className="path-button"
									onClick={
										() => {
											Connect.getUserSpecificInfo(SessionStore.getData("loggedUserId"), "username").then(
												response => { this.props.navigate(`/customer/${response.data}/info`) }
											)
										}
									}
								>
									<img src={personIcon} alt="Accout Informations" className="icons-menu" />
									My Account</button>

								<button
									className="path-button"
									onClick={
										() => {
											Connect.getUserSpecificInfo(SessionStore.getData("loggedUserId"), "username").then(
												response => { this.props.navigate(`/customer/${response.data}/transfer`) }
											)
										}
									}
								>
									<img src={moneyIcon} alt="Transfer" className="icons-menu" />
									Make Transfer</button>
							</>
						}
					</div>
				</div >
			</div>
		);
	}

	isUseLogged() {
		return (
			SessionStore.getData("loggedUserId") === "null" ||
			SessionStore.getData("loggedUserId") == null
		);
	}

	logOut() {
		SessionStore.saveData("loggedUserId", null);
		SessionStore.saveData("loggedUserName", null);
		document.location.reload(true);
	}
}
