import ReactSelect from 'react-select'

import styled from "styled-components"

export const Container = styled.div`
    background: #efefef;
    min-height: 100vh;
    margin-left: 12%; 
    padding: 20px;
`
export const ProductsImg = styled.img`
    width: 60px;
    border-radius: 6px;
`
export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;
    .css-13cymwt-control {
        cursor: pointer;
    }
`
export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
`
export const LinkMenu = styled.a`
    color: #323d5d;
    font-size: 16px;
    cursor: pointer;
    font-weight: ${({ isActiveStatus }) => (isActiveStatus ? 'bold' : '400')};
    border-bottom: ${({ isActiveStatus }) => (isActiveStatus ? '3px solid #9758a6' : 'none')};
    padding-bottom: 3px;
`