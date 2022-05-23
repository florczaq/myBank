import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";

import "../../styles/TransferPage.css"

export default class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            correct_pass: ""
        }
        this.validation = this.validation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.loadCorrectPassword = this.loadCorrectPassword.bind(this);
    }

    componentDidMount() {
        this.loadCorrectPassword();
    }

    render() {
        let password = this.state.password;
        return (
            <Formik
                initialValues={{ password }}
                validate={this.validation}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={this.onSubmit}
            >
                {
                    (props) => (
                        <Form className="form-elements save-form">
                            <div className="form-elements">
                                <label>Password:</label>
                                <Field
                                    name="password"
                                    type="password"
                                />
                                <div className="error-message">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button type='reset' >Cancel</button>
                                <button type='submit'>Confirm</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        );
    }

    loadCorrectPassword() {
        Connect.getUserSpecificInfo(SessionStore.getData('loggedUserId'), 'password').then(
            response => {
                this.setState({ correct_pass: response.data })
            }
        )
    }


    validation(values) {
        let errors = {};
        if (!values.password)
            errors.password = "Enter password";
        else if (values.password !== this.state.correct_pass) {
            errors.password = "Wrong password";
        }
        return errors;
    }

    onSubmit(values) {
        this.props.onSubmit();
    }
}