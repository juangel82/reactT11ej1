import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import './inicio.css'
const keys = Object.keys(localStorage);
const loginSchema = Yup.object().shape(
    {
        email:Yup.string().email('invalido').notOneOf(keys,'yaesite')
        .required('requierod'),
        password: Yup.string().required('Rqureidre')
    }
)
let almacenarDatos = (values)=>{
    console.log(values);
    localStorage.setItem(
        values.email,
        values.password
    );
}
const LoginFormik = () => {
    
    const initialCredentials={
        email:'',
        password:''
    }
    return (
        <div className="input-group">
       
            <Formik
                initialValues={initialCredentials}
                validationSchema = {loginSchema}
                onSubmit ={almacenarDatos}
                >
                 {({ values, handleChange, handleSubmit, isSubmitting,errors}) => (
                <Form>
                    <label htmlFor="email" class="form-label" >Email</label>
                    <Field id="email" type="email" name="email" class="form-control"/>
                    {errors.email ? (<div>{errors.email}</div>) : null}
                    <label htmlFor="password" class="form-label">password</label>
                    <Field id="password" type="password" name="password" class="form-control"/>
                     {errors.password ? (<div>{errors.password}</div>) : null}
                    <button type="submit" className="btn btn-primary">Registrarse</button>

                </Form>


                )}
                </Formik>
        </div>
    );
}

export default LoginFormik;

