import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.10);
    display: flex;
    gap: 12px;
    padding: 16px;
    width: max-content;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`

export const Image = styled.img`
    width: 150px;
    height: 140px;
    border-radius: 10px;
`

export const ProductName = styled.p`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const ProductPrice = styled.p`
    color: #000;
    /* text-align: center; */
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
`
