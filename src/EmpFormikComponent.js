import React from 'react';
import { useFormik, Formik, ErrorMessage, Field, Form } from 'formik';
import * as yup from 'yup';

export const EmpFormikComponent = () => {

    const initValues = {
        Id: '',
        Name: '',
        Location: '',
        Email: '',
        Gender: ''
    };

    const validateSchema = yup.object({
        Name: yup.string().max(20, 'Invalid Name Length').required('Please enter Name'),
        Location: yup.string().required('Please enter Location'),
        Email: yup.string().email('Invalid Email').required('Please enter Email.')
    });

    const submitForm = (values) => {
        alert(JSON.stringify(values));
    }




    return (
        <Formik
            initialValues={initValues}
            validationSchema={validateSchema}
            onSubmit={submitForm}>
            {
                (props) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty
                      } = props;

                    return (

                        <div>
                            <h2>Add Employee</h2>
                            <Form>
                                <p>
                                    <label htmlFor="Name">Name:</label>
                                    <Field name="Name" type="text"></Field>
                                    <ErrorMessage name="Name" component="div" style={{ color: 'red' }}></ErrorMessage>
                                </p>
                                <p>
                                    <label htmlFor="Location">Location:</label>
                                    <Field name="Location" type="text"></Field>
                                    <ErrorMessage name="Location" component="div" class="error"></ErrorMessage>
                                </p>
                                <p>
                                    <label htmlFor="Email">Email:</label>
                                    <Field name="Email" type="text"></Field>
                                    <ErrorMessage name="Email" component="div" className="error"></ErrorMessage>
                                </p>
                                <p>
                                    <label htmlFor="Gender">Gender:</label>
                                    <Field name="Gender" as="select">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Field>
                                    <ErrorMessage name="Email" className="error"></ErrorMessage>
                                </p>
                                <p>
                                    <button type="submit" disabled={!props.isValid}>Save</button>
                                </p>
                                <p>
                                    <div>Props: {JSON.stringify(props)}</div>
                                    <div>Touch: {JSON.stringify(touched)}</div>
                                    <div>isValid: {JSON.stringify(isValid)}</div>
                                </p>
                            </Form>

                        </div>

                    );
                }
            }
        </Formik>

    )
}

