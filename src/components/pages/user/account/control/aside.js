import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { AsideContainer } from './style'

export default function Aside() {
    return (
        <AsideContainer>
            <ul>
                <li>Avatar</li>
                <li>Meus dados</li>
                <li>LGPD - Conheça seus direitos</li>
                <li>Termos da Hackontrol</li>
                <li>Logout</li>
            </ul>
        </AsideContainer>
    )
}