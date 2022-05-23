import React, { Component } from 'react';
import Connect from '../../connect/Connect';
import SessionStore from '../../connect/SessionStore';

export default class BalanceDetailts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transfers: []
        }
    }

    componentDidMount() {
        Connect.getBalanceHistory(SessionStore.getData("loggedUserId")).then(
            response => this.setState({
                transfers: response.data[this.props.params.transferID]
            })
        )
    }

    render() {
        return (
            <div className='content'>
                <table className='details' >
                    <thead>
                        <tr>
                            <td>
                                Details
                            </td>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td className='tr-title'>Recipient:</td>
                            <td>{this.state.transfers['recipient']}</td>
                        </tr>
                        <tr>
                            <td className='tr-title'>Recipient Account Number:</td>
                            <td>{this.state.transfers['senderNumber']}</td>
                        </tr>
                        <tr>
                            <td className='tr-title'>Title:</td>
                            <td>{this.state.transfers['title']}</td>
                        </tr>
                        <tr>
                            <td className='tr-title'>Value:</td>
                            <td>{this.state.transfers['value']}</td>
                        </tr>
                        <tr>
                            <td className='tr-title'>Date:</td>
                            <td>{this.state.transfers['date']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}