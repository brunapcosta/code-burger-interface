import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import ProductsLogo from '../../assets/products-logo.png'
import {CardProduct} from '../../Components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImage,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            const newCategories = [{id: 0, name: 'Todas'}, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
          const { data: allProducts } = await api.get('products')

          const newProduct = allProducts.map(product => {
              return {...product, formatedPrice: formatCurrency(product.price)}
            })

          setProducts(newProduct)
      }

      loadCategories()
      loadProducts()
    }, [])

    useEffect(() => {
      if(activeCategory === 0){
        setFilterProducts(products)
      } else{
      const newFilteredProducts = products.filter(product => product.category_id === activeCategory)

      setFilterProducts(newFilteredProducts)
      }
    }, [activeCategory, products])


  return (
    <Container>
      <ProductsImage src={ProductsLogo} alt='produtos-logo' />
      <CategoriesMenu>
      {categories && categories.map(category => (
        <CategoryButton type='button' key={category.id}
         isActiveCategory={activeCategory === category.id} 
         onClick={() => {setActiveCategory(category.id)}}>{category.name}</CategoryButton>
      ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filterProducts && filterProducts.map(product => (
          <CardProduct key={product.id} product={product} />
          
        ))}

      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
