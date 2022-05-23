import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../../styles/NewCustomer.css";


export default class ContactInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            phoneNumber: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit(values) {
        values.email.replace(/\s/g, "");
        this.props.onSubmit(values.email, values.phoneNumber);
    }

    validate(values) {
        let errors = {};

        if (!values.email)
            errors.email = "Enter email.";
        else if (values.email.match(/^[\s\S]+@+[a-zA-Z]+\.[a-zA-Z]/) == null)
            errors.email = "Bad e-mail syntax. Should be something like: email@example.com";

        if (!values.phoneNumber)
            errors.phoneNumber = "Enter phone number.";
        else if (values.phoneNumber.length < 9)
            errors.phoneNumber = "Phone number should be 9 characters long.";
        else if (values.phoneNumber.match(/^[0-9]+$/) == null)
            errors.phoneNumber = "Phone number can only contain numbers.";

        return errors;
    }

    render() {
        let { email, phoneNumber } = this.state;
        return (
            <Formik
                initialValues={{ email, phoneNumber }}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={this.onSubmit}
            >
                {(props) => (
                    <Form className="form">
                        <h3>Contact</h3>

                        <div className="info-form">
                            <label> E-mail: </label>
                            <Field
                                placeholder="email@example.com"
                                name="email"
                            />
                            <div className="info-alert">
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div className="info-form">
                            <label> Phone Number: </label>
                            <Field
                                maxLength="9"
                                placeholder="000000000"
                                name="phoneNumber"
                            />
                            <div className="info-alert">
                                <ErrorMessage name="phoneNumber" />
                            </div>
                        </div>

                        <div className="form-buttons">
                            <button type="reset">Back</button>
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}