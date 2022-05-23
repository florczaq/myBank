import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore"
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../../styles/TransferPage.css"

export default class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            correct_pass: ""
        }
        this.validate = this.validate.bind(this);
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
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={this.onSubmit}
            >
                {(props) => (
                    <Form
                        className="verification-form"
                        style={{
                            border: "none",
                            height: "100%",
                            width: "100%"
                        }}
                    >
                        <h1>User Verification</h1>
                        <div className="form-elements">
                            <label>Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name='password' component='div' className="alert" />
                        </div>
                        <div className="form-buttons">
                            <button type="reset" onClick={() => this.props.setPage(0)}>Back</button>
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }

    onSubmit(values) {
        this.props.onSubmit(values.password);
    }

    loadCorrectPassword() {
        Connect.getUserSpecificInfo(SessionStore.getData('loggedUserId'), 'password').then(
            response => {
                this.setState({ correct_pass: response.data })
            }
        )
    }

    validate(values) {
        let errors = {}
        if (!values.password)
            errors.password = "Enter password";
        else if (this.state.correct_pass !== values.password) {
            errors.password = "Wrong password!";
        }
        return errors;
    }

}