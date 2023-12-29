import ReactSelect from 'react-select'

import styled from "styled-components"

import { Button } from "../../../Components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        background: #565656;
        border-radius: 10px;
        padding: 30px;
    }
`

export const Label = styled.p`
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 3px;
    margin-top: 25px;
`

export const Input = styled.input`
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: none;
    width: 100%;
    min-width: 300px;
    padding: 10px;
`

export const ButtonStyle = styled(Button)`
    width: 100%;
    margin-top: 25px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #ffffff;
    border-radius: 5px;
    padding: 10px;
    /* margin-bottom: 25px; */
    margin-top: 25px;
    gap: 5px;

    input{
        opacity: 0;
        width: 1px;
    }
`

export const ReactSelectStyle = styled(ReactSelect)`
    margin-top: 25px;
`