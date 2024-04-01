import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"

import LoginImg from '../../assets/burguer-porcao-aipim.png'
import Logo from '../../assets/logo.png'
import { Button, ErrorMessage } from '../../Components'
import { useUser } from '../../hooks/UserContext'
import apiCodeBurger from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  SingInLink
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Email inválido")
      .required("O campo de email é obrigatório"),
    password: Yup.string("Senha inválida")
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 digítos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      apiCodeBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }), {
      pending: 'Verificando seus dados',
      success: 'Seja bem vindo',
      error: 'Ocorreu um erro'
    })

    putUserData(data)

    setTimeout(() => {
      if (data.admin){
        navigate('/pedidos')
      } else{
        navigate('/')
      }
    }, 1000);
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt='login-image' />
      <ContainerItems>
        <img src={Logo} alt='logo-image' />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type='email'
            {...register("email")}
            error={errors.email?.message} />

          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type='password'
            {...register("password")}
            error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" to="/" style={{ marginTop: 70, marginBottom: 25 }} >Entrar</Button>
        </form>

        <SingInLink>
          Não tem conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro" >
            Cadastre-se
          </Link>
        </SingInLink>
      </ContainerItems>
    </Container>
  )
}
