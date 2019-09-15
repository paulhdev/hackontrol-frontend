import styled from 'styled-components'

export const AccountContainer = styled.div`
    position: absolute;
    top: 38%;
    width: 100%;
    background: white;
    padding: 50px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .form-container {
        width: 60%;
        text-align: center;
    }

    .input-container {
        display: flex;
        flex-direction: column;
    }

    .button-container {
        margin: 50px 0 60px;
        display: flex;
        flex-direction: column;
    }

    .select-container {
        margin-top: 16px;
        margin-bottom: 8px;
    }
`

export const AsideContainer = styled.aside`
    ul {
        list-style: none;
    }
`