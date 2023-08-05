import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './privateRoute'

function    Routtes() {

    return (
        <Router>
            <Routes>
                <Route exact path='/login' Component={Login} />
                <Route exact path='/register' Component={Register} />
                <PrivateRoute exact path='/' Component={Home} />
            </Routes>
        </Router>
    )

}
export default Routtes