import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../../styles/NewCustomer.css";

export default class PersonalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            pesel: ""
        }
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(values) {
        this.props.onSubmit(
            values.firstName,
            values.lastName,
            values.dateOfBirth,
            values.pesel
        );
        this.props.changePage(1);
    }

    validate(values) {
        let errors = {};
        if (!values.firstName)
            errors.firstName = "Enter your frist name.";

        if (!values.lastName)
            errors.lastName = "Enter your last name.";

        if (!values.dateOfBirth)
            errors.dateOfBirth = "Enter your date of birth.";

        if (!values.pesel)
            errors.pesel = "Enter your pesel.";
        else if (values.pesel.match(/^[0-9]+$/) == null)
            errors.pesel = "Pesel can only contain numebers.";
        else if (values.pesel.length < 11)
            errors.pesel = "Pesel must be 11 characters long.";

        return errors;
    }

    render() {
        let { firstName, lastName, dateOfBirth, pesel } = this.state;
        return (
            <Formik
                initialValues={{ firstName, lastName, dateOfBirth, pesel }}
                onSubmit={this.onSubmit}
                validate={this.validate}
                validateOnBlur={false}
                validateOnChange={false}
                className="formik"
            >
                {(props) => (
                    <Form className="form">
                        <h3>Personal Informations</h3>

                        <div className="info-form">
                            <label>First name:</label>
                            <Field
                                placeholder="First Name"
                                name="firstName"
                            />
                            <div className="info-alert">
                                <ErrorMessage name="firstName" />
                            </div>
                        </div>

                        <div className="info-form">
                            <label>Last name:</label>
                            <Field
                                placeholder="Last Name"
                                name="lastName"
                            />
                            <div className="info-alert">
                                <ErrorMessage name="lastName" />
                            </div>
                        </div>

                        <div className="info-form">
                            <label> Date of Birth: </label>
                            <Field
                                type="date"
                                name="dateOfBirth"
                            />
                            <div className="info-alert">
                                <ErrorMessage name="dateOfBirth" />
                            </div>
                        </div>

                        <div className="info-form">
                            <label>Pesel: </label >
                            <Field
                                maxLength="11"
                                placeholder="00000000000"
                                name="pesel"
                            />
                            <div className="info-alert">
                                <ErrorMessage name="pesel" />
                            </div>
                        </div>

                        <div className="form-buttons">
                            <button type="reset" onClick={this.props.goHome}>Back</button>
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}