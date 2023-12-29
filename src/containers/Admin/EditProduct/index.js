import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'


import { yupResolver } from '@hookform/resolvers/yup'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import * as Yup from 'yup'


import { ErrorMessage } from '../../../Components'
import api from '../../../services/api'
import { 
    Container,
    Label,
    Input,
    ButtonStyle,
    LabelUpload,
    ReactSelectStyle,
    ContainerOffer
} from './styles'

function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { navigate } = useNavigate()
    const location = useLocation()
    const {
            state: { product }
    } = location
       
    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome'),
        price: Yup.string().required('Digite o preço'),
        category: Yup.object().required('Escolha uma categoria')
    })

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        .productDataFormDataappend('file', data.file[0])
        .productDataFormDataappend('offer', data.offer)

        await toast.promise(
            api.put(`products/${product.id}`, productDataFormData), {
            pedding: 'Editando Produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar produto'
        })

        setTimeout(() => {
            navigate('/listar-produtos')
        }, 2000)
    }

useEffect(() => {
    async function loadCategories() {
        const { data } = await api.get('categories')

        setCategories(data)
    }

    loadCategories()
}, [])

return (
    <Container>
       <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input
            type='text'
            {...register('name')}
            defaultValue={product.name}
            />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input
            type='number'
            {...register('price')}
            defaultValue={product.price}
            />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
            {fileName || (
                <>
                    <UploadFileIcon />
                    Carregar Imagem
                </>
                )
            }
            
            <input type='file'
            id='image-input'
            accept='image/png, image/jpeg'
            {...register('file')}
            onChange={value => {
                setFileName(value.target.files[0]?.name)
            }}
            />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        
        <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => {
                return (
                    <>
                    <ReactSelectStyle
                        {...field}
                        options={categories}
                        getOptionLabel={cat => cat.name}
                        getOptionValue={cat => cat.id}
                        placeholder='Categoria'
                        defaultValue={product.category}
                    />
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                    </>
                )
            }}
         ></Controller>

         <ContainerOffer>
            <input
                type='checkbox'
                {...register('offer')}
                defaultChecked={product.offer}
            />
            <Label>Em oferta</Label>
         </ContainerOffer>

        <ButtonStyle>Editar Produto</ButtonStyle>
       </form>
    </Container>
)
}

export default EditProduct