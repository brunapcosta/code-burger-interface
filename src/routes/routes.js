import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import {Home, Login, Products, Register, Cart, Admin} from '../containers'
import PrivateRoutes from  './privateRoute'

function Routtes() {

    return (
        <Router>
                <Routes>
                    <Route path='/login' exact Component={Login} />
                    <Route path='/register' exact Component={Register} />
                    <Route element={<PrivateRoutes/>}>
                    <Route path='/' exact Component={Home} />
                    <Route path='/produtos' Component={Products} />
                    <Route path='/carrinho' Component={Cart} />

                    <Route path='/pedidos' Component={Admin} isAdmin={ true } />
                    </Route>
                </Routes>
        </Router>
    )

}
export default Routtes