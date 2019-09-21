import React from 'react';
import {
  AppBar, Tabs, Tab, Modal, TextField, Button, IconButton, Icon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
  },
  tabs: {
    backgroundColor: 'white',
    width: '100%',
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
    textAlign: 'left',
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
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(true);

  const teamNames = ['Yasmin Laurent', 'Henrique Souza', 'Filipe Alves', 'Pedro Spinola', 'Paulo Henrique'];

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered textColor="primary" className={classes.tabs}>
          <Tab label="My profile" />
          <Tab label="Teams" active />
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
      <div className={classes.bodyContainer}>
        <div className={classes.bodyDiv}>
          <h3>Team 60</h3>
          <ul className={classes.list}>
            {teamNames.map((item, index) => (
              <li>
                {
                <TextField
                id="name"
                value={item}
                label="Name"
                margin="normal"
                disabled
								/>
							}

                <IconButton variant="contained" color="secondary" style={{ color: '#2f0073' }}>
                <DeleteIcon className={classes.rightIcon} />
              </IconButton>
              </li>
            ),
            )}
          </ul>
        </div>
        <div className={classes.bodyDiv}>
          <h3>Project Link</h3>
          <TextField
            id="name"
            label="Project Link"
            margin="normal"
            fullWidth
					/>
        </div>
      </div>
    </div>
  );
}
