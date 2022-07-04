import React from 'react';
import LoginEntrar from '../../components/InicioLogin/LoginEntrar'
import LoginFormik from '../../components/InicioRegister/LoginFormik'
const InicioView = () => {
    return (
        <div className='container'>
        <div className='row'>
           <div className='col'> <LoginEntrar></LoginEntrar></div>
           <div className='col'>   <LoginFormik></LoginFormik></div>
        </div>
        </div>
    );
}

export default InicioView;