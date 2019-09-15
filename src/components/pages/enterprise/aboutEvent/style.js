import styled from 'styled-components';

import BannerImage from '../../../../assets/elipse.png';

export const Banner = styled.section`
  width: 100%;
  height: 923px;
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  margin-top: -250px;
  padding-top: 400px;

  text-align: center;
  color: #fff;

  h1 {
    font-size: 60px;
  }
`;

export const InfoArea = styled.article`
  width: 80%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  padding: 30px 60px;
  margin: 0 auto;
  margin-top: -400px;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 315px;
    height: 149px;
    margin: 5px;
  }

  strong {
    font-size: 20px;
    margin: 10px;
  }

  p {
    font-size: 18px;
    text-align: center;
    padding: 0 100px;
    margin-bottom: 30px;
  }

  p.date {
    font-size: 20px;
    font-weight: 600;
    color: #999;
  }

  button {
    width: 334px;
    height: 70px;
    min-height: 70px;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    background: #34007e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #fff;
  }
`;
