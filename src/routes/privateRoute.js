import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// Outlet
import PropTypes from 'prop-types'

// import { Header } from '../Components/Header'
// { component, ...rest }

const PrivateRoute = () => {
    const auth = localStorage.getItem('codeburger:userData')
    
    return (
        auth ? < Outlet to='/' /> : <Navigate to='/login' /> 
    )
    }


export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}