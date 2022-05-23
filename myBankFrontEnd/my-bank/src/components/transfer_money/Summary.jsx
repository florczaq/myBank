import React, { Component } from "react";

import "../../styles/TransferPage.css"

export default class Summary extends Component {

    render() {
        return (
            <div className="summary-table">
                <table>
                    <thead>
                        <tr>
                            <td colSpan={2}>Summary</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-type">Receiver Account Number: </td>
                            <td>{this.props.values.receiver}</td>
                        </tr>
                        <tr>
                            <td className="table-type">Title: </td>
                            <td>{this.props.values.title}</td>
                        </tr>
                        <tr>
                            <td className="table-type">Receiver Name: </td>
                            <td>{this.props.values.receiver_name}</td>
                        </tr>
                        <tr>
                            <td className="table-type">Value:</td>
                            <td>{this.props.values.value} zł</td>
                        </tr>
                    </tbody>
                </table>
                <div className="form-buttons">
                    <button onClick={() => this.props.navigate("/")} >Cancel</button>
                    <button onClick={this.props.onSubmit} type='submit'>Confirm</button>
                </div>
            </div>
        );
    }

}
