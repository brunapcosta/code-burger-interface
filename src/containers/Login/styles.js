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

export const LoginImage = styled.img`
    height: 80%;
    width: 30%;
    border-radius: 10px 0px 0px 10px;
`

export const ContainerItems = styled.div`
    height: 80%;
    background: #373737;
    border-radius: 0px 10px 10px 0px;
    padding: 25px 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img{
        margin-top: 20px;
    }

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
        margin-top: 70px;
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: 28px;
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

    Link{
        cursor: pointer;
        text-decoration: underline;
    }
`
export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #CC1717;
    margin-top: 2px;
`