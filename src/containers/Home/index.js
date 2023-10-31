import React from 'react'

import HomeLogo from '../../assets/home-logo.png'
import {CategoryCarousel, OffersCarousel} from '../../Components'
import {
  Container,
  HomeImage
} from './styles'

export function Home() {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt='home-logo' />
      <CategoryCarousel/>
      <OffersCarousel/>
    </Container>
  )
}