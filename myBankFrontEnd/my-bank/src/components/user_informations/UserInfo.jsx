import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";

import editIcon from "../../images/edit.svg"

import "../../styles/NewCustomer.css"
import "../../styles/UserInfo.css"

export default class UserInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      user: [],
      titles: [
        'First Name: ',
        'Last Name: ',
        'City: ',
        'Street: ',
        'House Number: ',
        'Pesel: ',
        'Email: ',
        'Phone Number: ',
        'Date of birth: ',
        'Post Code: ',
        'Account Number: '
      ],
    }


    this.deleteAccount = this.deleteAccount.bind(this);
  }

  componentDidMount() {
    let res = [];

    Connect.getUserInfo(SessionStore.getData("loggedUserId")).then(
      response => {
        this.setState({ elements: response.data });
        for (var x in this.state.elements)
          if (x !== 'username' && x !== 'password')
            res.push(x);
        this.setState({ user: res });
      }
    );

  }

  assignValues(name, title, value) {
    this.setState({
      field_name: name,
      field_title: title,
      old_value: value
    })
  }

  logOut() {
    SessionStore.saveData("loggedUserId", null);
    SessionStore.saveData("loggedUserName", null);
  }


  deleteAccount() {
    Connect.deleteAccount(SessionStore.getData("loggedUserId"))
      .then(
        response => {
          alert(response.data);
          this.props.navigate("/");
          this.logOut();
        }
      )
      .catch(
        error => alert("Something went wrong.")
      );
  }

  render() {
    return (
      <div className="container" id="user-info-container">
        <div className="form" id="InfoTable" >
          <h3>Account Informations</h3>
          <div className="content-u" id="u-info">
            <table>
              <tbody>
                {this.state.user.map((element_name, i) =>
                  <tr key={i}>
                    <td>{this.state.titles[i]}</td>
                    <td>{this.state.elements[element_name]}</td>
                    <td>
                      {element_name !== 'accountNumber' &&
                        < button id="edit-button" onClick={() => {
                          this.props.navigate(`/customer/${SessionStore.getData("loggedUserName")}/info/edit/${element_name}`)
                        }}>
                          <img src={editIcon} alt="Edit" />
                        </button>
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="buttons-section">
              <button className="delete-account"
                onClick={this.deleteAccount}
              >Delete Account</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}