import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import Aside from './aside'

import { AccountContainer } from './style'

export default function UserControl() {

	const [selectedDate, setSelectedDate] = React.useState(new Date('1990-08-18T21:11:54'))
	const competencias = ['Design', 'Desenvolvedor', 'Negócios', 'Marketing', 'Direito', 'Finanças']
	const [value, setValue] = React.useState('');

	const handleChange = event => {
		console.log(event.target.value)
		setValue(event.target.value);
	};

	function handleDateChange(date) {
		setSelectedDate(date);
	}

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	return (
		<AccountContainer>
			<Aside />
			<Grid container justify="space-between" className="form-container">
				<Grid container justify="center">
					<Typography variant="h4">Dados Pessoais</Typography>
				</Grid>
				<Grid container item xs={6} className="input-container" spacing={2}>
					<TextField
						id="input-name"
						label="Nome"
						className="input-name"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="input-email"
						label="Email"
						className="input-email"
						type="email"
						name="email"
						autoComplete="email"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="input-bio"
						label="Biografia"
						className="input-bio"
						margin="normal"
						variant="outlined"
					/>
					<FormControl variant="outlined" className="select-container">
						<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
							Competência
						</InputLabel>
						<Select
							value={value}
							onChange={handleChange}
							labelWidth={labelWidth}
						>
							{competencias.map((option, index) => (
								<MenuItem key={index} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid container item xs={6} className="input-container" spacing={2}>
					<TextField
						id="input-github"
						label="GitHub"
						className="input-github"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="input-linkedin"
						label="Linkedin"
						className="input-linkedin"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="input-twitter"
						label="Twitter"
						className="input-twitter"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="input-behance"
						label="Behance"
						className="input-behance"
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="input-facebook"
						label="Facebook"
						className="input-facebook"
						margin="normal"
						variant="outlined"
					/>
				</Grid>
				<Grid container item xs={12} className="button-container">
					<Button variant="contained" size="small" color="primary" className="user-control-update">
						Atualizar os dados
					    </Button>
				</Grid>
			</Grid>
		</AccountContainer>
	)
}