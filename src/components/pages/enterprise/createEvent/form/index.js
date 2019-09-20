import React from 'react'
import TextField from '@material-ui/core/TextField'
import { FormContainer, InputContainer, CardContainer, FormTitle, InputText, InputNumber, ButtonContainer, FormButton } from './style'
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Form() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    return (
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

            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container justify="space-around">
                    <FormTitle>Período de inscrições</FormTitle>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Inicio"
                        format="DD/MM/YYYY"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fim"
                        format="DD/MM/YYYY"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </Grid>
                <Grid container justify="space-around">
                    <FormTitle>Período do evento</FormTitle>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Inicio"
                        format="DD/MM/YYYY"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Fim"
                        format="DD/MM/YYYY"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

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
    )
}