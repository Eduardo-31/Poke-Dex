import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({isLogged}) => {



    if(isLogged) {
        return <Outlet />
    } else {
        return <Navigate to='/'/>
    }
 
}

export default ProtectedRoutes