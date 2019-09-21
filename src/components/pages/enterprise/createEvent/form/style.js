import styled from 'styled-components'

export const FormContainer = styled.form`
    position: absolute;
    top: 20%;
    right: 20%;
    background: white;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 60%;
    border-radius: 10px;
    box-shadow: 1px 1px 10px black;
`

export const InputContainer = styled.div`
    flex: 0 0 100%;
    justify-content: space-between;
    align-items: space-between;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    flex-direction: column;
    flex: 1;
    height: 200px;
`

export const FormTitle = styled.h2`
    width: 100%;
    text-align: center;
`

export const InputText = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const InputNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
        text-align: center;
        /* padding: 20px 0; */
        margin: 20px;
        width: 150px;
        height: 60px;
    }
`

export const ButtonContainer = styled.div`
    text-align: center;
    flex: 0 0 100%;
    align-self: center;
`

export const FormButton = styled.button`
    color: white;
    background: #34007E;
    border: none;
    font-weight: bolder;
    font-size: 20px;
    margin: 20px;
    padding: 20px;
    width: 50vh;
`