import * as Yup from "yup";
import {useFormik} from "formik";
import {Button, TextareaAutosize, TextField} from "@mui/material";
import React from "react";

const validate = Yup.object({
  name: Yup.string()
      .max(50, 'Must be less than 50 characters!')
      .required('This field is required'),
  email: Yup.string()
      .email('Invalid email')
      .required('This field is required'),
  message: Yup.string()
      .max(2000, 'Must be less than 2000 characters!')
      .required('This field is required'),
});

const ContactForm =() => {
    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            message: '',
        },
        onSubmit: async (values) => {
            await fetch(('/order'), {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    created: true,
                    name: values.firstName,
                    email: values.email,
                    message: values.message}),
            }).then( response => response.json());
        },
        validationSchema: validate,
    })

    return (
        <div>
            <h2 className="my-4 font-weight-bold .display-4">Contact Me</h2>
            <form onSubmit={formik.handleSubmit}>
                <TextField label="Name" name="name" value={formik.values.name} type="text" onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} style={{width: '50%', paddingRight: '40px'}}/>
                <TextField label="Email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} style={{width: '50%', paddingRight: '40px'}}/>
                <TextareaAutosize label="Message" name="message" type="text" value={formik.values.message} onChange={formik.handleChange} error={formik.touched.message && Boolean(formik.errors.message)} style={{width: '50%', marginBottom: "30px"}}/>
                <Button disabled={formik.values.name.length === 0 || formik.values.email.length === 0 || formik.values.message.length === 0} type="submit" style={{ display: "block",  width: "100%", border: "solid", padding: "14px 28px", fontWeight: 600, fontSize: "16px", cursor: "pointer", textAlign: "center"}}>Send</Button>
            </form>
        </div>
    );
}

export default ContactForm;
