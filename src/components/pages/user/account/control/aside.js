import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { AsideContainer } from './style'

export default function Aside() {
    return (
        <AsideContainer>
            <List component="nav">
                <ListItem button>
                    <FontAwesomeIcon icon={faUserCircle} size="6x" style={{ margin: 'auto' }} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Meus dados" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="LGPD - Conheça seus direitos" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Termos da Hackontrol" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Logout" />
                </ListItem>
                <Divider />
            </List>
        </AsideContainer>
    )
}