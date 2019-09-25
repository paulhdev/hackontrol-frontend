import React from 'react';
import {
	AppBar, Tabs, Tab, Modal
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Team from './team'
import Profile from './profile'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '10px',
		margin: 'auto',
		textAlign: 'center',
		boxShadow: 'none',
	},
	appBar: {
		boxShadow: 'none',
	},
	tabs: {
		backgroundColor: 'white',
	},
	tab: {
		borderBottom: '2px solid #C4C4C4',
		borderWidth: '10px',
	},
	text: {
		marginTop: '50px',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		position: 'absolute',
		width: 400,
		border: '2px solid #000',
		borderRadius: '10px',
		textAlign: 'center',
	},
	list: {
		listStyle: 'none',
	},
	bodyContainer: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginTop: '50px',
	},
	bodyDiv: {
		marginTop: '50px',
		marginBottom: '50px',
		width: '50%',
	},
}));

export default function UserControl() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [open, setOpen] = React.useState(true);

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const tabList = ["My profile", "My events", "Teams", "Regulation", "Logout"]

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ boxShadow: 'none' }}>
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered textColor="primary" className={classes.tabs} indicatorColor="primary">
					{tabList.map((item, index) => (
						<Tab label={item} className={classes.tab} />
					))}
				</Tabs>
			</AppBar>

			{/* <div>
				<h1 className={classes.text}>Your team has not been assembled yet</h1>
			</div>
			<Modal
				className={classes.modal}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div className={classes.paper}>
					<h2 id="simple-modal-title">Congratulations</h2>
					<p id="simple-modal-description">
						Your team was formed.
								</p>
				</div>
			</Modal> */}
			{value === 0 && <Profile />}
			{value === 2 && <Team />}
		</div>
	);
}
