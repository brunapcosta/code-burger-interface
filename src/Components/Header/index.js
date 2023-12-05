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

const pathHome = '/';
const pathProducts = '/produtos';
const pathCart = '/carrinho';

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const {pathname} = location
  const { logout, userData } = useUser()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }
  return (
      <Container>
        <ContainerLeft>
                  <PageLink onClick={() => navigate(pathHome)} isActive={pathname === pathHome} >Home</PageLink>
                  <PageLink onClick={() => navigate(pathProducts)} isActive={pathname.includes('produtos')} >Cardápio</PageLink>
              </ContainerLeft>
              <ContainerRight>
                  <PageLink onClick={() => navigate(pathCart)} >
                    {' '}
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