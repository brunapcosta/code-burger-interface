import styled from "styled-components"

export const ContainerButton = styled.button`
    width: 182px;
    height: 36px;
    background: #9758A6;
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #EEEEEE;
    border: none;
    cursor: pointer;

   &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`