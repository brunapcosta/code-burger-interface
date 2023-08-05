import React from 'react'
// import { useForm } from "react-hook-form"
// import { Link } from 'react-router-dom'
// import { toast } from 'react-toastify'

// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from "yup"

// import HomeImg from '../../assets/image-home.png'
// import Button from '../../Components/Button'
// import { useUser } from '../../hooks/UserContext'
// import apiCodeBurger from '../../services/api'
// import {
//   Container,
//   HomeImage,
//   ContainerItems,
//   Label,
//   Input,
//   SingInLink,
//   ErrorMessage
// } from './styles'

function Home() {
//   const { putUserData } = useUser()

//   const schema = Yup.object().shape({
//     email: Yup.string().email("Email inválido")
//       .required("O campo de email é obrigatório"),
//     password: Yup.string("Senha inválida")
//       .required("A senha é obrigatória")
//       .min(6, "A senha deve ter pelo menos 6 digítos"),
//   })

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = async clientData => {
//     const { data } = await toast.promise(
//       apiCodeBurger.post('sessions', {
//         email: clientData.email,
//         password: clientData.password
//       }), {
//       pending: 'Verificando seus dados',
//       success: 'Seja bem vindo',
//       error: 'Ocorreu um erro'
//     })

//     putUserData(data)
//   }

  return (
    <div>Home</div>
  )
}

export default Home