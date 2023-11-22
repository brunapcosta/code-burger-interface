/* eslint-disable no-unused-expressions */
import styled from 'styled-components'

export const Container = styled.div`
    background: #EFEFEF;
    min-height: 100vh;
    /* min-height: calc(100vh - 72px); */
`
export const ProductsImage = styled.img`
    width: 100%;
`
export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    cursor: pointer;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    // eslint-disable-next-line no-unused-expressions
    border-bottom: ${ props => props.isActiveCategory && '2px solid #9758A6'};
    color: ${ props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
    line-height: normal;
    font-size: 17px;
    padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 40px;
    justify-items: center;
    margin-top: 20px;
`