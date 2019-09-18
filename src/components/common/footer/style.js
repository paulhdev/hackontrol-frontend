import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    background: #3F3E3E;
    width: 100%;
    height: 45px;
    min-height: auto;
    padding: 15px 0 20px 0;

    z-index: 9999;
`;

export const TitleRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const TitleLogo = styled.div`
    & img {
        width: 35px;
    }
`
;
