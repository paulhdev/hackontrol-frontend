import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 70%;
    margin: auto;
`

export const FormText = styled.h2`
    width: 100%;
    text-align: center;
    margin: 30px 0;
`

export const InputText = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & input {
        padding: 20px 5px;
        margin: 20px 0;
    }
`

export const InputNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
        padding: 20px 0;
        margin: 20px;
        width: 150px;
        height: 60px;
    }
`