import React from 'react'
import { ProfileContainer } from './style'
import {
    Button,
    TextField,
    InputBase,
} from '@material-ui/core';

export default function UserProfile() {
    return (
        <ProfileContainer>
            <section>
                <div className="name">
                    <div>
                        <h2>Name</h2>
                        <InputBase
                            label="Name"
                            value="Yasmin Laurent"
                            margin="normal"
                            defaultValue="Naked input"
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                    </div>
                    <Button>Change</Button>
                </div>
                <div className="email">
                    <div>
                        <h2>Email</h2>
                        <InputBase
                            value="yl_1001@yahoo.com"
                            margin="normal"
                            defaultValue="Naked input"
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                    </div>
                    <Button>Change</Button>
                </div>
                <div className="pass">
                    <div>
                        <h2>Password</h2>
                        <InputBase
                            value="***********"
                            margin="normal"
                            defaultValue="Naked input"
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                    </div>
                    <Button>Change</Button>
                </div>
                <div className="Bios">
                    <TextField
                        id="bios"
                        label="Tell something about you"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            </section>
            <section></section>
            <section></section>

        </ProfileContainer>
    )
}