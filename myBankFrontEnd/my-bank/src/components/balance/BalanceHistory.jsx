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
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.balanceHistory.map((element, i) => (
                            <tr key={i}>
                                <td className="senderNumber">{element.senderNumber}</td>
                                <td className={element.transaction_type}>
                                    {element.transaction_type === 'incoming' ? '+' : '-'}
                                    {element.value} zł
                                </td>
                                <td>{element.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


/*
           "SELECT tt.name AS 'Type', "+
                           "bh.transaction_value AS 'Value', "+
                           "bh.transaction_date AS 'Date', " +
                           "bh.senderNumber AS 'SenderNumber' "+
                       "FROM transaction_types  AS tt INNER JOIN "+
                           "balance_history AS bh "+
                       "ORDER BY bh.id DESC"
                   );
                   WHERE bh.account_id = ?
            */