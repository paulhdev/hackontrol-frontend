import React from 'react'

import { FooterContainer, TitleRow, TitleLogo, TitleItem, ListRow, ListLogo, ListItem, CopyRow } from './style'

import hklogo from '../../../assets/hk_logo_white.svg'

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <TitleRow>
                    <TitleLogo>
                        <img src={hklogo} />
                    </TitleLogo>
                    <TitleItem>para empresas</TitleItem>
                    <TitleItem>para participantes</TitleItem>
                    <TitleItem>parceiros</TitleItem>
                </TitleRow>
                <ListRow>
                    <ListItem>
                        Team 54
                        @filipe
                        @henriquecsouzza
                        @Hidemitsu
                        @PH
                        @Victormbg
                    </ListItem>
                    <ListItem>
                        Cadastrar evento
                        Gerenciar eventos
                    </ListItem>
                    <ListItem>
                        Buscar evento por local
                        Buscar eventos online
                        Filtrar eventos
                        Visualiza r perfil
                    </ListItem>
                    <ListLogo>
                        Shawee
                    </ListLogo>
                </ListRow>
                <CopyRow>
                    hackontrol 2019
                </CopyRow>
            </FooterContainer>
        )
    }
}

export default Footer