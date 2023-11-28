import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../Components/Header'

const PrivateRoute = ({ isAdmin }) => {
    const auth = localStorage.getItem('codeburger:userData')

    if(!auth){
        return <Navigate to='/login' />
    }

    if(isAdmin && !JSON.parse(auth).admin){
        return <Navigate to='/' />
    } else{
        return (
                    <>
                        <Header />
                        < Outlet to='/' /> 
                    </>
                )
        }
    }


export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool

}