import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../Components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin() {
    const location = useLocation()
    return (
        <Container>
            <SideMenuAdmin path={location.pathname} />
            <ContainerItens>
                {location.pathname === paths.Order && <Orders />}
                {location.pathname === paths.ListProducts && <ListProducts />}
                {location.pathname === paths.NewProduct && <NewProduct />}
            </ContainerItens>
        </Container>
    )
}