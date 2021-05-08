import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

export const EmployeeFormik =()=>{

    const validateForm = (empData) => {
        const errors = {};
        if (!empData.Name)
            errors.Name = "Name is required.";

        if (!empData.Location)
            errors.Location = "Location is reuired.";
        if (!empData.Email)
            errors.Email = "Email is reuired.";

        var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!emailPattern.test(empData.Email))
        errors.Email = "Email is not valid.";

        return errors;
    }
   

        const formik = useFormik({
            initialValues:{
                Id:'',
                Name:'',
                Location:'',
                Email:''
            },
            // validate: validateForm,
            validationSchema: yup.object({
                Name: yup.string().max(20, 'Invalid Name Length').required('Please enter Name'),
                Location: yup.string().required('Please enter Location'),
                Email: yup.string().email('Invalid Email').required('Please enter Email.')
            }),
            onSubmit: values=>{
                alert(JSON.stringify(values));
            }
        })
        
 
   

    return(
       
            <div>
                <h2>Add Employee</h2>
                <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Name">Name:</label>
                    {/* <input type="text" name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange}></input> */}
                    <input name="Name" {...formik.getFieldProps("Name")} ></input>
                    {formik.touched.Name && formik.errors.Name ?
                    <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                </p>
                <p>
                    <label htmlFor="Location">Location:</label>
                    {/* <input type="text" name="Location" id="Location" value={formik.values.Location} onChange={formik.handleChange}></input> */}
                    <input name="Location" {...formik.getFieldProps("Location")}></input>
                    {formik.touched.Location && formik.errors.Location ?
                    <span style={{color:'red'}}>{formik.errors.Location}</span>: null}
                </p>
                <p>
                    <label htmlFor="Email">Email:</label>
                    {/* <input type="text" name="Email" id="Email" value={formik.values.Email} onBlur={formik.handleBlur} onChange={formik.handleChange}></input> */}
                    <input name="Email" {...formik.getFieldProps("Email")}></input>
                    {formik.touched.Email && formik.errors.Email ?
                    <span style={{color:'red'}}>{formik.errors.Email}</span>: null}
                </p>
                <p>
                    <button type="submit">Save</button>
                </p>
                </form>
                
            </div>
    )
}
    
