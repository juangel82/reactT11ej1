import React from 'react';

// Estado inicial de la aplicación.
// Estado inicial de la aplicación.
const initialState = {
    products: [],
    addProducts: (products) => {},
    deleteProducts: () => {},
    isAdmin:false,
    loginEntrar:()=>{},
    loginSalir: ()=>{}
  }

export default React.createContext(initialState)