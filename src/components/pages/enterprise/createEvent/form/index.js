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
    const [selectedDate2, setSelectedDate2] = React.useState(new Date());
    const [selectedDate3, setSelectedDate3] = React.useState(new Date());
    const [selectedDate4, setSelectedDate4] = React.useState(new Date());

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    function handleDateChange2(date) {
        setSelectedDate2(date);
    }
    function handleDateChange3(date) {
        setSelectedDate3(date);
    }
    function handleDateChange4(date) {
        setSelectedDate4(date);
    }

    return (
        <FormContainer>
            <InputContainer>
                <FormTitle>New event</FormTitle>
                <InputText>
                    <TextField
                        label="Title"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '100%' }}
                    />
                    <TextField
                        label="Address"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '70%' }}
                    />
                    <TextField
                        label="City"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '13%' }}
                    />
                    <TextField
                        label="Country"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '13%' }}
                    />
                </InputText>
            </InputContainer>

            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container justify="space-around" style={{ width: '50%', margin: '30px 0' }}>
                    <FormTitle>Application Period</FormTitle>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Start"
                        format="DD/MM/YYYY"
                        value={selectedDate}
                        onChange={handleDateChange}
                        style={{ width: '30%' }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="End"
                        format="DD/MM/YYYY"
                        value={selectedDate2}
                        onChange={handleDateChange2}
                        style={{ width: '30%' }}
                    />
                </Grid>
                <Grid container justify="space-around" style={{ width: '50%', margin: '30px 0' }}>
                    <FormTitle>Event Period</FormTitle>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Start"
                        format="DD/MM/YYYY"
                        value={selectedDate3}
                        onChange={handleDateChange3}
                        style={{ width: '30%' }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="End"
                        format="DD/MM/YYYY"
                        value={selectedDate4}
                        onChange={handleDateChange4}
                        style={{ width: '30%' }}
                    />
                </Grid>
                <Grid container justify="space-around" style={{ width: '50%', margin: '30px 0' }}>
                    <FormTitle>Number of participants</FormTitle>
                    <TextField
                        id="outlined-number"
                        label="Min"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '30%' }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Max"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '30%' }}
                    />
                </Grid>
                <Grid container justify="space-around" style={{ width: '50%', margin: '30px 0' }}>
                    <FormTitle>Number of members per team</FormTitle>
                    <TextField
                        id="outlined-number"
                        label="Min"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '30%' }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Max"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        style={{ width: '30%' }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <ButtonContainer>
                <FormButton>Create event</FormButton>
            </ButtonContainer>
        </FormContainer>
    )
}