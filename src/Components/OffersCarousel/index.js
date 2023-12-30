import React, {useEffect, useState} from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/cartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  OffersImage,
  ConteinerItens,
  CarouselImg,
  Button
} from './styles'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffer = data.filter(product => product.offer).map(product => {
              return {...product, formatedPrice: formatCurrency(product.price)}
            })

            console.log(onlyOffer)
            setOffers(onlyOffer)
        }

        loadOffers()
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
      <OffersImage src={Offers} alt='offers-logo' />

        <Carousel
          itemsToShow={5}
          style={{ width: '95%' }}
          breakPoints={breakPoints}
        >
            {
                offers && offers.map( product => (
                    <ConteinerItens key={product.id}>
                        <CarouselImg src={product.url} alt='foto do produto'/>
                        <p>{product.name}</p>
                        <p>{product.formatedPrice}</p>
                        <Button 
                        onClick={() => {
                          putProductInCart(product)
                          navigate('/carrinho')
                        }}
                        >Peça agora</Button>
                    </ConteinerItens>
                ))
            }
        </Carousel>
    </Container>
  )
}