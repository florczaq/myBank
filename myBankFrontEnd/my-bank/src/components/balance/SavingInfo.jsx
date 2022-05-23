import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";

import "../../styles/TransferPage.css"


export default class SavingInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0.0
        }

        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let value = this.state.value;
        return (
            <Formik
                initialValues={{ value }}
                validate={this.validate}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={this.onSubmit}
            >
                {
                    (props) => (
                        <Form className="form-elements save-form">
                            <div className="field-div">
                                <label>Value: </label>
                                <Field
                                    type='number'
                                    name="value"
                                />
                                <div className="error-message">
                                    <ErrorMessage name="value" />
                                </div>
                            </div>

                            <div className="form-buttons">
                                <button type="reset"
                                    onClick={
                                        () => this.props.setPage(-1)
                                    }
                                > Back </button>
                                <button type="submit" > Next </button>
                            </div>

                        </Form>
                    )
                }
            </Formik>
        );
    }

    validate(values) {
        let errors = {}
        if (!values.value)
            errors.value = "Enter a value.";
        else if (values.value <= 0)
            errors.value = "The value must be greater than 0.";
        else if (values.value > this.props.currentBalance)
            errors.value = `You have insufficient funds in your account. Your balance: ${this.props.currentBalance}`;
        return errors;
    }

    onSubmit(values) {
        this.props.onSubmit(values.value)
    }

}