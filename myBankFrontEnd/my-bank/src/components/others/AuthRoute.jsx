import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import SessionStore from "../../connect/SessionStore";

export default class AuthRoute extends Component {
	render() {
		if (SessionStore.isUserLogged() === true) {
			return { ...this.props.children }
		}
		else
			return <Navigate to="/" />
	}
}