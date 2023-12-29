import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"

import Logo from '../../assets/logo.png'
import RegisterImg from '../../assets/register-image.png'
import { Button, ErrorMessage } from '../../Components'
import apiCodeBurger from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  SingInLink
} from './styles'

export function Register() {

  const schema = Yup.object().shape({
    name: Yup.string("O nome é obrigatório").required(),
    email: Yup.string().email("Email  inválido")
      .required("O campo de email é obrigatório"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 digítos"),
    confirmPassword: Yup.string()
      .required("Confirmação de senha obrigatória").oneOf([Yup.ref('password')], "As senhas não conferem")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async client => {
    const response = await apiCodeBurger.post('users', {
      name: client.name,
      email: client.email,
      password: client.password
    })

    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt='register-image' />
      <ContainerItems>
        <img src={Logo} alt='logo-image' />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type='text'
            {...register("name")}
            error={errors.name?.message} />

          <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

          <Label>Confirmar Senha</Label>
          <Input
            type='password'
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message} />

          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }} >Cadastrar</Button>
        </form>

        <SingInLink>
          Já tem conta?{' '}
          <Link style={{ color: 'white' }} to="/login" >
            Faça Login
          </Link>
        </SingInLink>
      </ContainerItems>

    </Container>
  )
}
