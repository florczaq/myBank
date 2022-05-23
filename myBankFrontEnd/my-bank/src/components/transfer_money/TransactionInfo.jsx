import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../../styles/TransferPage.css"

export default class TransactionInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: "",
            value: 0,
            title: ""
        }
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let { receiver, value, title } = this.state;
        return (
            <Formik
                validate={this.validate}
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{ receiver, value, title }}
                enableReinitialize={true}
            >
                {(props) => (
                    <Form className="tansaction-info">
                        <h1>Transaction info</h1>
                        <div className="form-elements">
                            <label>Receiver account number:</label>
                            <Field
                                maxLength="10"
                                name="receiver"
                                type='text'
                            />
                            <ErrorMessage name='receiver' component='div' className="alert" />
                        </div>
                        <div className="form-elements">
                            <label>Title</label>
                            <Field
                                maxLength="100"
                                name="title"
                                type='text'
                            />
                            <ErrorMessage name='title' component='div' className="alert" />
                        </div>
                        <div className="form-elements">
                            <label>Value:</label>
                            <Field
                                type="number"
                                name="value"
                            />
                            <ErrorMessage name='value' component='div' className="alert" />
                        </div>
                        <div className="form-buttons">
                            <button onClick={() => this.props.navigate("/")} type="reset">Back Home</button>
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }

    onSubmit(values) {
        this.props.onSubmit(values.receiver, values.value, values.title);
    }

    validate(values) {
        let errors = {}
        if (!values.receiver)
            errors.receiver = "Enter receiver account number.";
        else if (values.receiver.match(/^[0-9]+$/) == null)
            errors.receiver = "Account number can only contain numbers.";

        if (!values.value || values.validate <= 0)
            errors.value = "Enter value greater than 0.";

        if (!values.title)
            errors.title = "Enter transfer title.";

        return errors;
    }
}


