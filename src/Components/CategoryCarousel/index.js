import React, {useEffect, useState} from 'react'
import Carousel from 'react-elastic-carousel'

import CategoryImg from '../../assets/category.png'
import api from '../../services/api'
import {
  Container,
  CategoryImage,
  ConteinerItens,
  CarouselImg,
  Button
} from './styles'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    const breakPoints = [
      { width: 100, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
      { width: 800, itemsToShow: 3 },
      { width: 1000, itemsToShow: 4 },
      { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <CategoryImage src={CategoryImg} alt='category-logo' />

        <Carousel
          itemsToShow={5}
          style={{ width: '95%' }}
          breakPoints={breakPoints}
        >
            {
                categories && categories.map( category => (
                    <ConteinerItens key={category.id}>
                        <CarouselImg src={category.url} alt='foto da cotegoria'/>
                        <Button to={'/produtos'}
                          state={{ categoryId: category.id }}
                        >
                          {category.name}</Button>
                    </ConteinerItens>
                ))
            }
        </Carousel>
    </Container>
  )
}