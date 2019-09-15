import React from 'react';

import { FooterContainer, TitleRow, TitleLogo } from './style';

import hklogo from '../../../assets/hk_logo_white.svg';

class Footer extends React.Component {
  render() {
    return (
          <FooterContainer>
              <TitleRow>
                  <TitleLogo>
                      <img src={hklogo} alt="HK hackontrol" />
                    </TitleLogo>
                </TitleRow>
            </FooterContainer>
    );
  }
}

export default Footer;
