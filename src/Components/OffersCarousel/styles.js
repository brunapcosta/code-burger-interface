import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 30px 0;

    .rec.rec-arrow {
        color: #efefef;
        background-color: #9758A6;
        filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));
        border: none;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758A6;
        background-color: #efefef;
        color: #9758A6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`
export const OffersImage = styled.img``

export const CarouselImg = styled.img`
    width: 240px;
    height: 210px;
    border-radius: 5%;
    margin-bottom: 16px;
`

export const ConteinerItens = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    color: #424242;
`

export const Button = styled.button`
    margin-top: 16px;
    background: #9758A6;
    
    border: none;
    border-radius: 8px;
    height: 50px;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`