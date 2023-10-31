import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// import PropTypes from 'prop-types'

const PrivateRoutes = () => {
    const auth = localStorage.getItem('codeburger:userData')
    return (
        auth ? <Outlet to='/' /> : <Navigate to='/login' />)
}

export default PrivateRoutes

// PrivateRoute.propTypes = {
//     component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
// }