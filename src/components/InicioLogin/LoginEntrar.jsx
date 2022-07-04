import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import Context from '../../context';

//import { useDispatch, useSelector } from 'react-redux';
// {clickLogin} from '../../redux/actions'
import './inicio.css'
import { Navigate } from 'react-router-dom';
import { useContext} from 'react';

const loginSchema = Yup.object().shape(
    {
        email:Yup.string().email('invalido')
        .required('email obligatorio'),
        password: Yup.string().required('password obligatorio')
    }
)

const LoginEntrar = () => {
    const context = useContext(Context);
   // const estado = useSelector(state=>state);
  //  const dispatch = useDispatch();
    const initialCredentials={
        email:'',
        password:''
    }
    let comprobarDatos = (values)=>{
    
    
        let contrasena = localStorage.getItem(values.email);
        
        if (contrasena===values.password){
            console.log('estas dentro');
           // dispatch(clickLogin());
           context.loginEntrar();
            <Navigate to="/store"></Navigate>
     
        }else{
            console.log(values.email);
            console.log(values.password);
        }
     }
    return (
        
        <div className="input-group">
        
            <Formik
                initialValues={initialCredentials}
                validationSchema = {loginSchema}
                onSubmit ={comprobarDatos}
                >
                 {({ values, handleChange, handleSubmit, isSubmitting,errors}) => (
                <Form>
                    <label htmlFor="email" class="form-label">Email</label>
                    <Field id="email" type="email" name="email" class="form-control"/>
                    {errors.email ? (<div>{errors.email}</div>) : null}
                    <label htmlFor="password" class="form-label">password</label>
                    <Field id="password" type="password" name="password" class="form-control"/>
                     {errors.password ? (<div>{errors.password}</div>) : null}
                    <button type="submit" className="btn btn-primary">Entrar</button>

                </Form>


                )}
                </Formik>
        </div>
    );
}

export default LoginEntrar;


