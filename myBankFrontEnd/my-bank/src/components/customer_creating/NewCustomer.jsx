import React, { Component } from "react";
import Connect from "../../connect/Connect.js";
import AccountInformations from "./AccountInformations.jsx"
import CustomerInformations from "./CustomerInformations.jsx";

import "../../styles/NewCustomer.css";

export default class NewCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            city: "",
            street: "",
            houseNumber: "",
            pesel: "",
            email: "",
            phoneNumber: "",
            dateOfBirth: "",
            postCode: ""
        }

        this.passPersonalInformations = this.passPersonalInformations.bind(this);
        this.passAddressInfromation = this.passAddressInfromation.bind(this);
        this.passContactInformation = this.passContactInformation.bind(this);
        this.passAccountInformation = this.passAccountInformation.bind(this);
        this.changePage = this.changePage.bind(this);
        this.goHome = this.goHome.bind(this);
    }

    componentDidMount() {
        this.changePage(0);
    }

    goHome() {
        this.props.navigate("/")
    }

    render() {
        return (
            <div className="container">
                <div id="new-customer" >
                    <div id="personal_informations">
                        <CustomerInformations
                            values={this.state}
                            submitPersonalInformations={this.passPersonalInformations}
                            submitAddressInformation={this.passAddressInfromation}
                            submitContactInformation={this.passContactInformation}
                            goHome={this.goHome}
                        />
                    </div>
                </div>

                <div id="new-account">
                    <AccountInformations
                        onSubmit={this.passAccountInformation}
                        changePage={this.changePage}
                    />
                </div>
            </div>
        );
    }

    passPersonalInformations(firstName, lastName, dateOfBirth, pesel) {
        this.setState({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            pesel: pesel
        });
    }

    passAddressInfromation(city, street, houseNumber, postCode) {
        this.setState({
            city: city,
            street: street,
            houseNumber: houseNumber,
            postCode: postCode
        });
    }

    passContactInformation(email, phoneNumber) {
        this.setState({
            email: email,
            phoneNumber: phoneNumber
        })
        this.changePage(1)
    }

    passAccountInformation(username, password) {
        // this.setState({
        //     username: username,
        //     password: password
        // })
        this.createUser(username, password)
        this.props.navigate("/");
    }

    createUser(username, password) {
        let info = this.state;
        info.username = username;
        info.password = password;
        Connect.createNewUser(this.state).then(
            response => alert("Account has been created.")
        ).catch(
            error => alert("Something went wrong try again")
        )
    }

    changePage(page) {
        const new_customer = document.getElementById("new-customer");
        const new_account = document.getElementById("new-account");
        switch (page) {
            case 0:
                new_customer.style.display = "flex";
                new_account.style.display = "none";
                break;

            case 1:
                new_customer.style.display = "none";
                new_account.style.display = "flex";
                break;
            default: break;
        }
    }

}









// export class Summary extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div id="summary">
//                 <fieldset>
//                     <h3>Summary</h3>
//                     <ul className="summary-ul">
//                         <li>Name: {" "}
//                             {this.state.firstName} {" "}
//                             {this.state.lastName}
//                         </li>
//                         <li>Pesel: {this.state.pesel}</li>
//                         <li>
//                             Address: {" "}
//                             {this.state.street} {" "}
//                             {this.state.houseNumber} {" "}
//                             {this.state.city} {", "}
//                             {this.state.postCode}
//                         </li>
//                         <li>Email: {this.state.email}</li>
//                         <li>Phone Number: {this.state.phoneNumber}</li>
//                         <li>Date of birth: {this.state.dateOfBirth}</li>
//                     </ul>
//                     <button onClick={() => { this.goToPage(1) }}>Back</button>
//                     <button onClick={() => {
//                         Connect.createNewUser(this.state).then(
//                             this.props.navigate("/")
//                         )
//                     }}>Next</button>
//                 </fieldset>
//             </div>
//         );
//     }
// }