import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths.js'
import {Home, Login, Products, Register, Cart, Admin} from '../containers'
import PrivateRoutes from  './privateRoute'

function Routtes() {

    return (
        <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />

        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Products />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoutes isAdmin />}>
          <Route element={<Admin />} path={paths.Order} />
          {/* <Route element={<Admin />} path={paths.Products} />
          <Route element={<Admin />} path={paths.NewProduct} />
          <Route element={<Admin />} path={paths.EditProduct} /> */}
        </Route>
      </Routes>
    </Router>
        // <Router>
        //     <Routes>
        //         <Route path="/login" element={<Login />} />
        //         <Route path="/register" element={<Register />}  />

        //         <Route exact path="/" element={
        //             <PrivateRoutes>
        //                 <Home />
        //             </PrivateRoutes>} />
        //         <Route path="/produtos" element={
        //             <PrivateRoutes>
        //                 <Products />
        //             </PrivateRoutes>} />
        //         <Route path="/carrinho" element={
        //             <PrivateRoutes>
        //                 <Cart />
        //             </PrivateRoutes>} />
        //         <Route path="/pedidos" isAdmin element={
        //             <PrivateRoutes>
        //                 <Admin />
        //             </PrivateRoutes>} />
        //     </Routes>
        // </Router>
    )
}
export default Routtes