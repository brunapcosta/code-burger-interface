import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../Components/Header'

const PrivateRoute = ({ isAdmin, ...rest }) => {
    const auth = localStorage.getItem('codeburger:userData')

    if(isAdmin && !JSON.parse(auth).admin){
        return <Navigate to='/' />
    }
    if(isAdmin && JSON.parse(auth).admin){
        return <Navigate to='/pedidos' />
    }
        return (
            auth ? 
            <>
                {!isAdmin && <Header />}
                < Outlet to='/' />
            </>
            : <Navigate {...rest} to='/login' />
        )
    }


export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool

}