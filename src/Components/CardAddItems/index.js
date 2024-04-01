import React from 'react'
// import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import CardProduct from '../../Components'
import { useCart } from '../../hooks/cartContext'
import formatCurrency from '../../utils/formatCurrency'
import {Button} from '../Button'
import {Container, Body} from './style'

export function CardAddItems({product}) {
    const {cartProducts, increaseProducts, decreaseProducts} = useCart()
  console.log(cartProducts)
  const {putProductInCart} = useCart()
  return (
    <Container>

    {cartProducts && cartProducts.length > 0 ? (
      cartProducts.map(product => (
       <Body key={product.id}>
        <p>{product.name}</p>
        <p>{formatCurrency(product.price)}</p>
        <div className='quantity-container'>
          <button onClick={() => decreaseProducts(product.id)}>-</button>
          <p>{product.quantity}</p>
          <button onClick={() => increaseProducts(product.id)}>+</button>
        </div>
        <p>{formatCurrency(product.quantity * product.price)}</p>
        <Button onClick={() => putProductInCart(product)}
        >Adicionar</Button>
       </Body>
    ))
  ) : (
    <CardProduct />
  )
}
     
    </Container>
  )
}

CardAddItems.propTypes = {
    product: PropTypes.object
}