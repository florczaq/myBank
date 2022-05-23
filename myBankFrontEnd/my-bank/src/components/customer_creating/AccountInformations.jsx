import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Connect from "../../connect/Connect.js";

import "../../styles/NewCustomer.css";



export default class AccountInformations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            repeat_password: "",
            username_exist: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validation = this.validation.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
    }

    checkUsername(username) {
        if (username !== "")
            Connect.isUsernameTaken(username).then(
                response => {
                    this.setState({ username_exist: response.data });
                })
    }

    onSubmit(values) {
        console.log(values);
        this.props.onSubmit(values.username, values.password);
    }

    validation(values) {
        let errors = {}
        if (!values.username) {
            errors.username = "Enter username."
        }
        else {
            this.checkUsername(values.username);
            if (this.state.username_exist === true)
                errors.username = "Username is already taken."
        }


        if (!values.password) {
            errors.password = "Enter password."
        }
        else if (!values.repeat_password) {
            errors.repeat_password = "Repeat password."
        }
        else if (values.password !== values.repeat_password) {
            errors.password = "Passwords need to be the same."
            errors.repeat_password = "Passwords need to be the same."
        }
        return errors;
    }

    render() {
        let { username, password, repeat_password } = this.state;
        return (
            <Formik
                initialValues={{ username, password, repeat_password }}
                validate={this.validation}
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {
                    (props) => (
                        <Form className="form" >
                            <h2>Account Inforamtions</h2>
                            <div className="info-form">
                                <label>Username: </label>
                                <Field
                                    id="username"
                                    name="username"
                                    onKeyUp={() => this.checkUsername(
                                        document.getElementById("username").value
                                    )}
                                />

                                <div className="info-alert">
                                    <ErrorMessage name="username" />
                                </div>
                            </div>
                            <div className="info-form">
                                <label>Password: </label>
                                <Field name="password" type="password" />
                                <div className="info-alert">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>
                            <div className="info-form">
                                <label>Repeat password: </label>
                                <Field name="repeat_password" type="password" />
                                <div className="info-alert">
                                    <ErrorMessage name="repeat_password" />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button type="reset" onClick={() => this.props.changePage(0)}>Back</button>
                                <button type="submit">Next</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        );
    }
}