import { React, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import About from "../pages/About/About.page";

const useAuth=()=>{
    const [isLogged, setLogged] = useState(true);
    if(isLogged){
        return true
    } else {
        return false
    }
}

export const  ProtectedRoute=() =>{
    const auth=useAuth()

    return auth?<Outlet/>: <Navigate to="/"/>
}