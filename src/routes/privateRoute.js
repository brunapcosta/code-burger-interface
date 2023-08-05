import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component, ...rest }) {
    const user = localStorage.getItem('codeburger:userData')

    if (!user) {
        <Navigate to="/login" />
    }

    return <Route Component={component} {...rest} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}