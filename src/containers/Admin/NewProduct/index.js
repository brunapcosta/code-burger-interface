import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import UploadFileIcon from '@mui/icons-material/UploadFile'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { register, handleSubmit, control } = useForm()

    const onSubmit = data => console.log(data)

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

        <Label>Preço</Label>
        <Input type='number' {...register('price')}/>

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
        
        <Controller
            name="category_id"
            control={control}
            render={({ field }) => {
                return (
                    <ReactSelect
                        {...field}
                        options={categories}
                        getOptionLabel={cat => cat.name}
                        getOptionValue={cat => cat.id}
                        placeholder='Categoria'
                    />
                )
            }}
         ></Controller>

        <ButtonStyle>Adicionar Produto</ButtonStyle>
       </form>
    </Container>
)
}

export default NewProduct