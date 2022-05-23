import React, { Component } from "react";

import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation";
import ContactInfo from "./ContactInfo";

import "../../styles/NewCustomer.css";

export default class CustomerInformations extends Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.changePage(0);
    }

    render() {
        return (
            <div className="customer-info-group">
                <div id="page0" className="pages">
                    <PersonalInformation
                        onSubmit={this.props.submitPersonalInformations}
                        changePage={this.changePage}
                        goHome={this.props.goHome}
                    />
                </div>

                <div id="page1" className="pages">
                    <AddressInformation
                        onSubmit={this.props.submitAddressInformation}
                        changePage={this.changePage}
                    />
                </div>

                <div id="page2" className="pages">
                    <ContactInfo
                        onSubmit={this.props.submitContactInformation}
                        changePage={this.changePage}
                    />
                </div>
            </div>
        );
    }

    changePage(page) {
        const page0 = document.getElementById("page0");
        const page1 = document.getElementById("page1");
        const page2 = document.getElementById("page2");
        switch (page) {
            case -1:
                break;
            case 0:
                page0.style.display = 'flex';
                page1.style.display = 'none';
                page2.style.display = 'none';
                break;
            case 1:
                page0.style.display = 'none';
                page1.style.display = 'flex';
                page2.style.display = 'none';
                break;
            case 2:
                page0.style.display = 'none';
                page1.style.display = 'none';
                page2.style.display = 'flex';
                break;
            default: break;
        }
    }
}