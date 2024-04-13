import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const user = localStorage.getItem('name')
    if(user) {
        return <Outlet />
    } else {
        return <Navigate to='/'/>
    }
 
}

export default ProtectedRoutes