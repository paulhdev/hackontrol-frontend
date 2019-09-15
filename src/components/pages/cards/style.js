import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 391px;
  height: 410px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 40px 30px;
  margin: 10px 15px;

  strong {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000;
  }

  img {
    width: 315px;
    height: 149px;
    margin: 5px;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  a {
    width: 334px;
    height: 70px;
    min-height: 70px;
    left: 985px;
    top: 1060px;
    border: none;
    border-radius: 2px;
    background: #34007e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #fff;
  }
`;
