import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";

import "../../styles/Balance.css"


export default class BalanceHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balanceHistory: [],
        }
    }

    loadBalanceHistory() {
        Connect.getBalanceHistory(SessionStore.getData("loggedUserId")).then(
            response => { this.setState({ balanceHistory: response.data }) }
        );
    }

    componentDidMount() {
        this.loadBalanceHistory();
    }

    render() {
        return (
            <div className="bHistory" id="right-panel">
                <table id="tabela">
                    <thead>
                        <tr className="table-title">
                            <td colSpan={3}>
                                History
                            </td>
                        </tr>
                        <tr>
                            <th className="senderTitle">
                                <label>Sender / Receiver</label>
                            </th>
                            <th>Value</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.balanceHistory.map((element, i) => (
                            <tr key={i}>
                                <td className="senderNumber">{element.recipient}</td>
                                <td className={element.transaction_type}>
                                    {element.transaction_type === 'incoming' ? '+' : '-'}
                                    {element.value} zł
                                </td>
                                <td className="details-td">
                                    <button
                                        onClick={
                                            () => this.props.navigate
                                                (`/customer/${SessionStore.getData("loggedUserName")}/info/balance/transfer-details/${i}`)
                                        } className="details-button">...</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}