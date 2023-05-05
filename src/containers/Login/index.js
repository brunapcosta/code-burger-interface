import React from 'react';

import LoginImg from '../../assets/image-login.png'
import Logo from '../../assets/logo.png'


import { 
  Container, 
  LoginImage, 
  ContainerItems, 
  Label, 
  Input, 
  Button, 
  SingInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt='login-image'/>
      <ContainerItems>
        <img src={Logo} alt='logo-image'/>
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>
        <SingInLink>Não tem conta? <a>Cadastre-se</a></SingInLink>
      </ContainerItems>

    </Container>
  )
}

export default Login