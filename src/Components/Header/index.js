import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


import Cart from '../../assets/cart-icon.png'
import Person from '../../assets/person.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  Line,
  ContainerText,
  PageLinkExit
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const { logout, userData } = useUser()

  const toPageHome = () => {
    navigate('/')
  }

  const toPageProducts = () => {
    navigate('/produtos')
  }

  const toPagePCart = () => {
    navigate('/carrinho')
  }

  const logoutUser = () => {
    logout()
    navigate('/login')
  }
  return (
    <Container>
      <ContainerLeft>
                <PageLink onClick={toPageHome} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={toPageProducts} isActive={pathname.includes('produtos')} >Cardápio</PageLink>
            </ContainerLeft>
            <ContainerRight>
                <PageLink onClick={toPagePCart} >
                    <img src={Cart} alt='carrinho'/>
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt='perfil'/>
                </PageLink>

                <ContainerText>
                    <p>Olá, { userData.name }</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
    </Container>
  )
}