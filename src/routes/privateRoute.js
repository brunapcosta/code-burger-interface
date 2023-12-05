import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../Components'

const PrivateRoute = ({ component, isAdmin, ...rest }) => {
    const user = localStorage.getItem('codeburger:userData')

    if(!user){
        return <Navigate to='/login' />
    } 

    if(isAdmin && !JSON.parse(user).admin ){
        return <Navigate to='/' />
    }
        
    return ( 
            <>
                {!isAdmin && <Header />}
                <Outlet {...rest} element={component} />
            </>

    )
    }


export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool

}