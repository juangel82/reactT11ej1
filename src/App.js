import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

import About from './pages/About/About.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Product/Product.page'
import Nav from './components/Nav/Nav.component'
import { useState,useReducer } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.scss';
import Context from './context';
import { reducerProductos,ADD_PRODUCTOS,DELETE_PRODUCTOS,reducerLogin,LOGIN_ENTRAR,LOGIN_SALIR } from './context/reducers';
import InicioView from './pages/Inicio/Inicio.pages';

export default function App() {
 // const[isAdmin,setAdmin]=useState(true);
  // Estado inicial a enviarle al contexto, creado con hooks
  // ya que estamos trabajando con componentes de función.
  const [products, dispatch] = useReducer(reducerProductos, [
    {
      id: 1,
      price: 109.95,
      category: "men clothing",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      description: "Your perfect pack for everyday use and walks in the forest.",
    }
  ]);
 const[isAdmin,dispatchLogin]=useReducer(reducerLogin,false);
 	
// Método 'reducer' para vaciar la lista de productos.
let deleteProducts = () => {
  dispatch({type: DELETE_PRODUCTOS});
}
 let loginEntrar =() =>{
  dispatchLogin({type: LOGIN_ENTRAR});
 }
 let loginSalir =() =>{
  dispatchLogin({type: LOGIN_SALIR});

}

	
// Método 'reducer' para actualizar la lista de productos.
let addProducts = (newProducts) => {
  dispatch({type: ADD_PRODUCTOS, payload: newProducts});
}
  return (
    <Context.Provider className="App" value={{
      products: products,
      addProducts: addProducts,
      deleteProducts: deleteProducts,
      isAdmin:isAdmin,
      loginEntrar:loginEntrar,
      loginSalir:loginSalir

    }}>
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route exact path="/" element={<InicioView />}/>  
          <Route exact path="/store" element={isAdmin?<Store />:<Navigate to='/'/>}/>      
   
        <Route exact path="/about" element={isAdmin?<About />:<Navigate to='/'/>}/>
    <Route path="/product/:id" element={<Product />} />

     
      </Routes>
     </BrowserRouter>
  
    </Context.Provider>
  );
}
/*
ESTO ES PARA CUANDO NO TENEMOS EL PROTECTEDROUTE
 <Route exact path="/about" element = {isLogged ? <About /> : <Navigate to='/'/>}/>
          <Route path="/product/:id" element = {isLogged ? <Product />  : <Navigate to='/'/>  }/>
*/





  
    