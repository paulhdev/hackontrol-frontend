import React from 'react'
import { FormContainer, InputContainer, CardContainer, FormTitle, InputText, InputNumber, ButtonContainer, FormButton } from './style'

const Form = () =>
    <FormContainer>
        <InputContainer>
            <FormTitle>Novo evento</FormTitle>
            <InputText>
                <input placeholder='Titulo' style={{ width: '100%' }} />
                <input placeholder='Local' style={{ width: '70%' }} />
                <input placeholder='Cidade' style={{ width: '13%' }} />
                <input placeholder='UF' style={{ width: '13%' }} />
            </InputText>
        </InputContainer>

        <CardContainer>
            <FormTitle>Periodo do evento</FormTitle>
            <InputNumber>
                <input type='date' placeholder='De' style={{ padding: '20px 0' }} />
                <input type='date' placeholder='Ate' style={{ padding: '20px 0' }} />
            </InputNumber>
        </CardContainer>

        <CardContainer>
            <FormTitle>Numero de participantes</FormTitle>
            <InputNumber>
                <input type='number' placeholder='Min' />
                <input type='number' placeholder='Max' />
            </InputNumber>
        </CardContainer>

        <CardContainer>
            <FormTitle>Numero de membros por equipe</FormTitle>
            <InputNumber>
                <input type='number' placeholder='Min' />
                <input type='number' placeholder='Max' />
            </InputNumber>
        </CardContainer>

        <ButtonContainer>
            <FormButton>Criar evento</FormButton>
        </ButtonContainer>
    </FormContainer>

export default Form