import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../../styles/NewCustomer.css";


export default class AddressInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            street: "",
            houseNumber: "",
            postCode: ""
        }
        this.validation = this.validation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.onSubmit(
            values.city,
            values.street,
            values.houseNumber,
            values.postCode
        );
        this.props.changePage(2);
    }

    validation(values) {
        let errors = {};

        if (!values.city)
            errors.city = "Enter city name."
        else if (!values.city.match(/^[a-zA-Z]/))
            errors.city = "City name shouldn't contain any numbers or characters"

        if (!values.street)
            errors.street = "Enter street name."

        if (!values.houseNumber)
            errors.houseNumber = "Enter house number."

        if (!values.postCode)
            errors.postCode = "Enter post code.";
        else
            if (!values.postCode.match(/^(([0-9]{2})+-+([0-9]{3})+ +([a-zA-Z]))/))
                errors.postCode = "Post code should look like: 00-000 City";

        return errors;
    }

    render() {
        let { city, street, houseNumber, postCode } = this.state;
        return (
            <Formik
                initialValues={{ city, street, houseNumber, postCode }}
                validate={this.validation}
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {
                    (props) => (
                        <Form className="form">
                            <h3>Address</h3>

                            <div className="info-form">
                                <label>City:</label>
                                <Field
                                    placeholder="City"
                                    name="city"
                                />
                                <div className="info-alert">
                                    <ErrorMessage name="city" />
                                </div>
                            </div>

                            <div className="info-form">
                                <label>Street:</label>
                                <Field
                                    placeholder="st. StreetName"
                                    name="street"
                                />
                                <div className="info-alert">
                                    <ErrorMessage name="street" />
                                </div>
                            </div>

                            <div className="info-form">
                                <label>House number:</label>
                                <Field
                                    placeholder="f.e. 42a"
                                    name="houseNumber"
                                    maxLength="10"
                                />
                                <div className="info-alert">
                                    <ErrorMessage name="houseNumber" />
                                </div>
                            </div>

                            <div className="info-form">
                                <label>Post Code</label>
                                <Field
                                    placeholder="00-000 City"
                                    name="postCode"
                                />
                                <div className="info-alert">
                                    <ErrorMessage name="postCode" />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button type="reset">Back</button>
                                <button type="submit">Next</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        );
    }
}