import React, { Component } from "react";
import Connect from "../../connect/Connect";
import SessionStore from "../../connect/SessionStore";
import { Field, Form, Formik, ErrorMessage } from "formik";


import "../../styles/NewCustomer.css"
import "../../styles/UserInfo.css"

export default class EditInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldValue: "",
            fieldType: "text"
        }

        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let fieldName = this.props.params.param;
        let type = "";

        switch (fieldName) {
            case "dateOfBirth": type = "date"; break;
            case "email": type = "email"; break;
            default: type = "text"; break;
        }

        this.setState({ fieldType: type });

        Connect.getUserInfo(SessionStore.getData("loggedUserId")).then(
            response => {
                this.setState({
                    oldValue: response.data[fieldName]
                })
            }
        )
    }

    validate(values) {
        let errors = {}
        let fieldName = this.props.params.param;
        if (!values.input)
            errors.input = "Enter new value"
        else switch (fieldName) {
            case "firstName":
            case "lastName":
                if (values.input.length > 40)
                    errors.input = "Max length: 40 characters.";
                break;
            case "pesel":
                if (values.input.match(/^[0-9]+$/) == null)
                    errors.input = "Pesel can only contain numebers.";
                else if (values.input.length !== 11)
                    errors.input = "Pesel must be 11 characters long.";
                break;
            case 'email':
                if (values.input.match(/^[\s\S]+@+[a-zA-Z]+\.[a-zA-Z]/) == null)
                    errors.input = "Bad e-mail syntax. Should be something like: email@example.com";
                break;
            case 'phoneNumber':
                if (values.input.match(/^[0-9]+$/) == null)
                    errors.input = "Phone number can only contain numbers.";
                else if (values.input.length !== 9)
                    errors.input = "Phone number should be 9 characters long.";
                break;
            case 'postCode':
                if (!values.input.match(/^(([0-9]{2})+-+([0-9]{3})+ +([a-zA-Z]))/))
                    errors.input = "Post code should look like: 00-000 City";
                break;
            case 'city':
                if (!values.input.match(/^[a-zA-Z]/))
                    errors.input = "City name shouldn't contain any numbers or characters"
                break;
            default: break;
        }

        return errors;
    }

    onSubmit(values) {
        let fieldName = this.props.params.param;
        if (fieldName === 'accountNumber') {
            this.props.navigate("/")
            alert("The account number cannot be edited!");
        }
        else {
            Connect.updateCustomerInfo(SessionStore.getData("loggedUserId"), fieldName, values.input)
                .then(
                    (response) => {
                        this.props.navigate(`/customer/${SessionStore.getData('loggedUserName')}/info`)
                    }
                )
                .catch((errors) =>
                    alert("Something went wrong!")
                )
        }
    }

    render() {
        let oldValue = this.state.oldValue;
        return (
            <div className="content">
                <Formik
                    initialValues={{ oldValue }}
                    validate={this.validate}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form className="form" id="edit-form">
                                <div className="form-elements">
                                    <div className="edit-element">
                                        <h2>New Value: </h2>
                                        <Field
                                            name="input"
                                            type={this.state.fieldType}
                                            placeholder={oldValue}
                                        />
                                        <div className="info-alert">
                                            <ErrorMessage name="input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-buttons">

                                    <button
                                        type="reset"
                                        onClick={
                                            () =>
                                                this.props.navigate(`/customer/${SessionStore.getData('loggedUserName')}/info`)
                                        }
                                    >Cancel</button>

                                    <button
                                        type="submit"
                                    >Confirm</button>

                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}