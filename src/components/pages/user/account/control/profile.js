import React from 'react'
import { ProfileContainer } from './style'

export default function UserProfile() {
    return (
        <ProfileContainer>
            <div>
                <h2>Name</h2>
                <p>Yasmin Laurent</p>
            </div>
            <button>Change</button>
        </ProfileContainer>
    )
}