import React from 'react'
// import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/cartContext'
import {Button} from '../Button'
import {Container, Image, ProductName, ProductPrice} from './style'

export function CardProduct({product}) {
    const {putProductInCart} = useCart()
    return(
        <Container>
        <Image src={product.url} alt='imagem do produto'/>
        <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}
        >Adicionar</Button>
        </div>
        </Container>
        )
}

CardProduct.propTypes = {
    product: PropTypes.object
}