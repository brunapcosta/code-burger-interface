import React from 'react'

import CartLogo from '../../assets/cart-logo.png'
import {CartItems, CartResume} from '../../Components'
import {
  Container,
  CartImage,
  Wrapper
} from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt='cart-logo' />
      <Wrapper>
        <CartItems />
        <CartResume/>
      </Wrapper>
    </Container>
  )
}