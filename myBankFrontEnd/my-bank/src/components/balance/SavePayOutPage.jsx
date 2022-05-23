import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";

import Verification from "./Verification";
import SavingInfo from "./SavingInfo";

import "../../styles/TransferPage.css"

export default class SavePayOutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            password: ""
        }

        this.nextPage = this.nextPage.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
        this.saveAction = this.saveAction.bind(this);
    }

    componentDidMount() {
        this.nextPage(0);
    }

    render() {
        return (
            <div className="content">
                <div id="tansaction-info" className="tansaction-info">
                    {this.props.option == 1 &&
                        <h3>Save Money</h3>}

                    {this.props.option == 2 &&
                        <h3>Pay out</h3>}

                    <SavingInfo
                        setPage={this.nextPage}
                        onSubmit={this.submitInfo}
                        currentBalance={this.props.option == 1 ? this.props.balance : this.props.savings}
                        option={this.props.option}
                    />
                </div>
                <div id="verification" className="transaction-info">
                    <h3>Verification</h3>
                    <Verification onSubmit={this.saveAction} />
                </div>
            </div>
        );
    }

    saveAction() {
        if (this.props.option === 1)
            Connect.saveMoney(
                SessionStore.getData("loggedUserId"), this.state.value
            ).then(
                this.nextPage(-1),
                window.location.reload()
            );
        else
            if (this.props.option == 2)
                Connect.payOutMoney(
                    SessionStore.getData("loggedUserId"), this.state.value
                ).then(
                    this.nextPage(-1),
                    window.location.reload()
                );
    }

    handleChanges(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    nextPage(value) {
        switch (value) {
            case -1:
                this.props.goBack();
                break;
            case 0:
                document.getElementById("tansaction-info").style.display = "block";
                document.getElementById("verification").style.display = "none";
                break;
            case 1:
                document.getElementById("tansaction-info").style.display = "none";
                document.getElementById("verification").style.display = "block";
                break;
            default: break;
        }
    }

    submitInfo(value) {
        this.setState({ value: value });
        this.nextPage(1);
    }

}


