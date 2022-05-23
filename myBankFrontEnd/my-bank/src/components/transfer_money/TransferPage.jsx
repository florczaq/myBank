import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore"
import Summary from "./Summary";

import TransactionInfo from "./TransactionInfo"
import Verification from "./Verification"

import "../../styles/TransferPage.css"

export default class TransferPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: "",
            value: "",
            password: "",
            receiver_name: "",
            senderId: "",
            title: ""
        }
        this.passTransactionInfo = this.passTransactionInfo.bind(this);
        this.passPassword = this.passPassword.bind(this);
        this.getName = this.getName.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.makeTransfer = this.makeTransfer.bind(this);
    }

    render() {
        return (
            <div className="forms">
                <div className="just-element" id="info">
                    <TransactionInfo navigate={this.props.navigate} setPage={this.nextPage} onSubmit={this.passTransactionInfo} />
                </div>
                <div className="just-element" id="verification" >
                    <Verification setPage={this.nextPage} onSubmit={this.passPassword} />
                </div>
                <div className="just-element" id="summary">
                    <Summary navigate={this.props.navigate} values={this.state} setPage={this.nextPage} onSubmit={this.makeTransfer} />
                </div>
                <div className="just-element" id="confirmation">
                    <div className="confirm">
                        <h3>The transfer has been sent.</h3>
                        <div className="form-buttons">
                            <button onClick={() => this.props.navigate("/")}>Confirm and go home</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    passTransactionInfo(new_receiver, new_value, new_title) {
        this.setState({ receiver: new_receiver, value: new_value, title: new_title });
        this.nextPage(1);
    }

    passPassword(new_password) {
        this.setState({ password: new_password });
        this.nextPage(2);
    }

    componentDidMount() {
        this.nextPage(0);
    }

    makeTransfer() {
        Connect.makeTransaction({
            receiverAccountNumber: this.state.receiver,
            senderId: SessionStore.getData("loggedUserId"),
            value: this.state.value,
            title: this.state.title
        }).then(this.nextPage(3));
    }

    getName() {
        Connect.getUserNameById(this.state.receiver)
            .then((response) => {
                this.setState({ receiver_name: response.data })
            });
    }

    nextPage(value) {
        const info = document.getElementById("info");
        const verification = document.getElementById("verification");
        const summary = document.getElementById("summary");
        const confirmation = document.getElementById("confirmation");
        switch (value) {
            case 0:
                info.style.display = "flex";
                verification.style.display = "none";
                summary.style.display = "none";
                confirmation.style.display = "none";
                break;
            case 1:
                info.style.display = "none";
                verification.style.display = "flex";
                summary.style.display = "none";
                confirmation.style.display = "none";
                break;
            case 2:
                this.getName();
                info.style.display = "none";
                verification.style.display = "none";
                summary.style.display = "flex";
                confirmation.style.display = "none";
                break;
            case 3:
                info.style.display = "none";
                verification.style.display = "none";
                summary.style.display = "none";
                confirmation.style.display = "flex";
                break;
            default: break;
        }
    }
}
