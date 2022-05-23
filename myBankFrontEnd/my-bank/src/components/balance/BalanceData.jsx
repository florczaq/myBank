import React, { Component } from "react";

import "../../styles/Balance.css"


export default class BalanceData extends Component {
    render() {
        return (
            <div className="values-data">
                {this.props.showBalance ?
                    <div className="balance">
                        <div className="balance-info">
                            <p> Balance: </p>
                            <p className="sub-p"> {this.props.balance} zł </p>
                        </div>
                        <div className="buttons">
                            <button onClick={this.props.switchView}>Show savings</button>
                            <button onClick={
                                () => {
                                    this.props.setPage(1);
                                }
                            } >Save Money</button>
                        </div>
                    </div>

                    :

                    <div className="savings">
                        <div className="balance-info">
                            <p> Savings: </p>
                            <p className="sub-p">{this.props.savings} zł</p>
                        </div>
                        <div className="buttons">
                            <button onClick={this.props.switchView}>Show balance</button>
                            <button onClick={
                                () => {
                                    this.props.setPage(2);
                                }
                            }
                            > Pay Out</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}