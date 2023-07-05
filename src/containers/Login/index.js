import React from 'react'
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"

import LoginImg from '../../assets/burguer-porcao-aipim.png'
import Logo from '../../assets/logo.png'
import Button from '../../Components/Button'
import apiCodeBurger from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  SingInLink,
  ErrorMessage
} from './styles'

function Login() {

  const schema = Yup.object().shape({
    email: Yup.string().email("Email  inválido")
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

  const onSubmit = async client => {
    const response = await apiCodeBurger.post('sessions', {
      email: client.email,
      password: client.password
    })

    console.log(response)
  }

  const notify = () => {
    toast.error('Ocorreu um erro', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
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

          <Button onClick={onSubmit} closeOnClick={notify} type="submit" style={{ marginTop: 80, marginBottom: 25 }} >Entrar</Button>
          <ToastContainer autoClose={2000} />
        </form>

        <SingInLink>Não tem conta? <a>Cadastre-se</a></SingInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login