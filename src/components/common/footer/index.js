import React from 'react'

import { FooterContainer, TitleRow, TitleLogo, TitleItem, ListRow, ListLogo, ListItem, CopyRow } from './style'

import hklogo from '../../../assets/hk_logo_white.svg'
import shawee from '../../../assets/shawee.png'

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <TitleRow>
                    <TitleLogo>
                        <img src={hklogo} />
                    </TitleLogo>
                </TitleRow>
            </FooterContainer>
        )
    }
}

export default Footer