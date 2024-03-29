import styled from 'styled-components'

import Background from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${Background});
    justify-content: center;
    display: flex;
    align-items: center;
`

export const RegisterImage = styled.img`
    height: 90%;
`

export const ContainerItems = styled.div`
    background: #373737;
    border-radius: 0px 10px 10px 0px;
    height: 90%;
    padding: 25px 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 10px;
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: ${props => (props.error ? '12px' : '28px')};
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 350px;
    height: 37px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${props => (props.error ? '2px solid #CC1717': 'none')};
    padding-left: 10px;
`

export const SingInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    a{
        cursor: pointer;
        text-decoration: underline;
    }
`