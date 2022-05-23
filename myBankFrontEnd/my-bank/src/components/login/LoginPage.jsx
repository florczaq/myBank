import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";

import '../../styles/LoginPage.css'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }

        this.login = this.login.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.validate = this.validate.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
    }

    render() {
        let { username, password } = this.state;
        return (
            <div className="content">
                <Formik
                    initialValues={{ username, password }}
                    onSubmit={this.login}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form className="login-field">
                                <h2> Login </h2>
                                {this.state.message !== null &&
                                    <div className="alert"> {this.state.message}</div>
                                }
                                <div className="errors">
                                    <ErrorMessage name="username" component="div" className="alert" />
                                    <ErrorMessage name="password" component="div" className="alert" />
                                </div>


                                <label>Username:</label>
                                <Field name="username" type="text" />

                                <label>Password:</label>
                                <Field name="password" type="password" />

                                <div className="buttons">
                                    <button type="reset" onClick={() => { this.props.navigate("/") }} >Back</button>
                                    <button type="submit">Submit </button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div >
        );
    }

    validate(values) {
        let errors = {};
        if (!values.password) {
            this.clearMessage();
            errors.password = "Enter Password";

        }
        if (!values.username) {
            this.clearMessage();
            errors.username = "Enter Username";
        }
        return errors;
    }


    componentDidMount() {
        this.setState(
            {
                username: "",
                password: "",
                message: null
            }
        )
    }

    handleChanges(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearMessage() {
        this.setState({ message: null });
    }

    login(values) {
        Connect.userExist(values.username.trim(), values.password.trim()).then(
            result => {
                SessionStore.saveData("loggedUserId", result.data)
                SessionStore.saveData("loggedUserName", values.username)
                this.props.navigate("/")
            }
        ).catch(error => {
            SessionStore.saveData("loggedUserId", null);
            this.setState({ message: ("Wrong login or password!") })
        });
    }
}