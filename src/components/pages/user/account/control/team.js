import React from 'react'
import {
    AppBar, Avatar, Tabs, Tab, Modal, TextField, Button, IconButton, Icon, InputBase,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Yasmin from '../../../../../assets/users/Yasmin.jpg';
import Henrique from '../../../../../assets/users/Henrique.jpg';
import Filipe from '../../../../../assets/users/Filipe.jpg';
import Hidemitsu from '../../../../../assets/users/Hidemitsu.jpg';
import Paulo from '../../../../../assets/users/Paulo.jpg';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: 10,
        display: 'inline-block',
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

export default function Team() {
    const classes = useStyles();

    const teamNames = [
        {
            name: 'Yasmin Laurent',
            url: Yasmin,
        },
        {
            name: 'Henrique Souza',
            url: Henrique,
        },
        {
            name: 'Filipe Alves',
            url: Filipe,
        },
        {
            name: 'Hidemitsu ',
            url: Hidemitsu,
        },
        {
            name: 'Paulo Henrique',
            url: Paulo,
        }
    ];

    return (
        <div className={classes.bodyContainer}>
            <div className={classes.bodyDiv}>
                <h3>Team 60</h3>
                <ul className={classes.list}>
                    {teamNames.map((item, index) => (
                        <li>
                            <Avatar alt="Remy Sharp" src={item.url} className={classes.avatar} />
                            {
                                <span>

                                    <InputBase
                                        id="name"
                                        value={item.name}
                                        label="Name"
                                        margin="normal"
                                        disabled
                                    />
                                </span>
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
                <h3>Product Hunt Link</h3>
                <TextField
                    id="name"
                    label="Product Hunt Link"
                    margin="normal"
                    fullWidth
                />
            </div>
        </div>
    )
}