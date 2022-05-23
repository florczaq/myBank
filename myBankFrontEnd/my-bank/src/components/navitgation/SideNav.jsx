import React, { Component } from "react";
import { Link } from "react-router-dom";
import SessionStore from "../../connect/SessionStore";
import Connect from "../../connect/Connect";
import "../../styles/SideNav.css"

import homeIcon from '../../images/home.svg';
import cardIcon from '../../images/card.svg';
import personIcon from '../../images/person.svg'
import moneyIcon from '../../images/money.svg'

export default class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        Connect.getUserSpecificInfo(SessionStore.getData("loggedUserId"), "username").then(
            response => {
                this.setState({ username: response.data })
            }
        )
    }

    render() {
        return (
            <nav className="side">
                <ul>
                    <h1 className="menu-title"> Menu </h1>
                    <li>
                        <Link to='/'>
                            <img className="icons" src={homeIcon} alt="Go Home" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={`/customer/${this.state.username}/info/balance`} >
                            <img className="icons" src={cardIcon} alt="Check Balane" />
                            Balance
                        </Link>
                    </li>
                    <li>
                        <Link to={`/customer/${this.state.username}/info`} >
                            <img className="icons" src={personIcon} alt="Account Informations" />
                            Account</Link>
                    </li>
                    <li>
                        <Link to={`/customer/${this.state.username}/transfer`} >
                            <img className="icons" src={moneyIcon} alt="Transfer money" />
                            Transfer
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    isUseLogged() {
        return (
            SessionStore.getData("loggedUserId") === "null" ||
            SessionStore.getData("loggedUserId") == null
        )
    }
}