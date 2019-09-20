import React from 'react'
import TextField from '@material-ui/core/TextField'
import { FormContainer, InputContainer, CardContainer, FormTitle, InputText, InputNumber, ButtonContainer, FormButton } from './style'

const Form = () =>
    <FormContainer>
        <InputContainer>
            <FormTitle>Novo evento</FormTitle>
            <InputText>
                <TextField
                    label="Título"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
                <TextField
                    label="Local"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '70%' }}
                />
                <TextField
                    label="Cidade"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '13%' }}
                />
                <TextField
                    label="UF"
                    margin="normal"
                    variant="outlined"
                    style={{ width: '13%' }}
                />
            </InputText>
        </InputContainer>

        <CardContainer>
            <FormTitle>Período de inscrições</FormTitle>
            <InputNumber>
                <input type='date' placeholder='De' style={{ padding: '20px 0' }} />
                <input type='date' placeholder='Ate' style={{ padding: '20px 0' }} />
            </InputNumber>
        </CardContainer>

        <CardContainer>
            <FormTitle>Período do evento</FormTitle>
            <InputNumber>
                <input type='date' placeholder='De' style={{ padding: '20px 0' }} />
                <input type='date' placeholder='Ate' style={{ padding: '20px 0' }} />
            </InputNumber>
        </CardContainer>

        <CardContainer>
            <FormTitle>Número de participantes</FormTitle>
            <InputNumber>
                <input type='number' placeholder='Min' />
                <input type='number' placeholder='Max' />
            </InputNumber>
        </CardContainer>

        <CardContainer>
            <FormTitle>Número de membros por equipe</FormTitle>
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