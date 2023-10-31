import React from 'react'

import CartLogo from '../../assets/cart-logo.png'
import {CartItems} from '../../Components'
import {
  Container,
  CartImage
} from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt='cart-logo' />
      <CartItems />
    </Container>
  )
}