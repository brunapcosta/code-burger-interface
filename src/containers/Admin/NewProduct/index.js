import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome'),
        price: Yup.string().required('Digite o preço'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('required', 'carregue um arquivo', value => {
            return value?.length > 0
        }).test('fileSize', 'Arquivo até 8MB', value => {
            return value[0]?.size <= 8000000
        }).test('type', 'Arquivo JPEG ou PNG', value =>{
            return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
        })
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
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.post('products', productDataFormData), {
            pedding: 'Criando Produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar produto'
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
        <Input type='text' {...register('name')}/>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type='number' {...register('price')}/>
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
            render={({ field }) => {
                return (
                    <>
                    <ReactSelectStyle
                        {...field}
                        options={categories}
                        getOptionLabel={cat => cat.name}
                        getOptionValue={cat => cat.id}
                        placeholder='Categoria'
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

        <ButtonStyle>Adicionar Produto</ButtonStyle>
       </form>
    </Container>
)
}

export default NewProduct