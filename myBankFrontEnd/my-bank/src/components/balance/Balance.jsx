import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SavePayOutPage from "./SavePayOutPage";
import SessionStore from "../../connect/SessionStore";

import BalanceHistory from "./BalanceHistory";
import BalanceData from "./BalanceData";

import "../../styles/Balance.css"

export default class Balance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: 0.0,
            savings: 0.0,
            showBalance: true,
            page: 0
        }
        this.switchView = this.switchView.bind(this);
        this.goBack = this.goBack.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {
        this.setPage(0);

        Connect.getUserSpecificInfo(SessionStore.getData("loggedUserId"), "balance")
            .then(response => { this.setState({ balance: response.data }) })
            .catch(this.setState({ balance: 0.0 }))

        Connect.getUserSpecificInfo(SessionStore.getData("loggedUserId"), "savings")
            .then(response => { this.setState({ savings: response.data }) })
            .catch(this.setState({ savings: 0.0 }))
    }

    render() {
        return (
            <div className="content">
                {this.state.page === 0 ?
                    <div className="values-main">
                        <BalanceData
                            showBalance={this.state.showBalance}
                            switchView={this.switchView}
                            balance={this.state.balance}
                            username={this.props.params.username}
                            savings={this.state.savings}
                            setPage={this.setPage}
                        />
                        <BalanceHistory navigate={this.props.navigate} />
                    </div>
                    :
                    <SavePayOutPage savings={this.state.savings} balance={this.state.balance} option={this.state.page} goBack={this.goBack} />
                }
            </div>
        );
    }

    switchView() {
        let res = this.state.showBalance === true ? false : true;
        this.setState({ showBalance: res });
    }

    goBack() {
        this.setState({ page: 0 });

    }

    setPage(new_page) {
        this.setState({ page: new_page });
    }

}



