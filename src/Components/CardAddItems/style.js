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

export const Body = styled.div`
    display: grid;
    grid-gap: 10px 15px;

    .quantity-container{
        display: flex;
        gap: 20px;
        button{
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
        p{
            margin-top: 5px;
        }
    }
`