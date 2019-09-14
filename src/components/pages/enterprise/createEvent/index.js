import React from 'react'

import { FormContainer, FormText, InputText, InputNumber } from './style'

class CreateEvent extends React.Component {
    render() {
        return (
            <>
                <FormContainer>
                    <FormText>Novo evento</FormText>
                    <InputText>
                        <input placeholder='Titulo' style={{ width: '100%' }} />
                        <input placeholder='Local' style={{ width: '70%' }} />
                        <input placeholder='Cidade' style={{ width: '13%' }} />
                        <input placeholder='UF' style={{ width: '13%' }} />
                    </InputText>
                    <FormText>Periodo do evento</FormText>
                    <InputNumber>
                        <input type='date' placeholder='De' />
                        <input type='date' placeholder='Ate' />
                    </InputNumber>
                    Numero de participantes
                    <InputNumber>
                        <input type='number' placeholder='Min' />
                        <input type='number' placeholder='Max' />
                    </InputNumber>
                    Numero de membros por equipe
                    <InputNumber>
                        <input type='number' placeholder='Min' />
                        <input type='number' placeholder='Max' />
                    </InputNumber>

                    <button>Criar evento</button>
                </FormContainer>
            </>
        )
    }
}

export default CreateEvent