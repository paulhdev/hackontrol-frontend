import styled from 'styled-components';
import BannerImage from '../../../assets/code.jpg';
import ImageSectionEmail from '../../../assets/office.jpg';

export const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 455px;
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  margin-top: 55px;

  .overlay {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px 60px;
    background: linear-gradient(90deg, rgba(86, 48, 140, 0.6) 0%, rgba(188, 188, 188, 0.6) 100%);
  }

  article.content {
    h1 {
      font-size: 70px;
      color: #fff;
      margin-bottom: 20px;
      padding-right: 20px;
    }
    p {
      color: #fff;
      font-weight: 500;
      font-size: 26px;
      max-width: 700px;
    }
  }
`;

export const FormEvent = styled.form`
  width: 360px;
  height: 400px;
  background: #fff;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    margin: 30px 0;
    margin-top: 10px;
  }

  input {
    height: 70px;
    width: 334px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 18px;
    background: #ffffff;
    border: 1px solid #696969;
    box-sizing: border-box;
    border-radius: 2px;
  }

  button {
    cursor: pointer;
    width: 334px;
    height: 70px;
    background: #34007e;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    margin-top: 10px;
    border: none;
    border-radius: 2px;
  }
`;

export const NextEvents = styled.section`
  padding: 60px;

  h2 {
    text-align: center;
    margin-bottom: 60px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: block;
    color: #000;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    margin: 40px 0;
  }
`;

export const Newsletter = styled.section`
  position: relative;
  width: 100%;
  height: 322px;
  background-image: url(${ImageSectionEmail});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  max-width: 100%;
  margin-top: -40px;
  margin-bottom: 45px;

  .overlay {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px 60px;
    background: linear-gradient(90.09deg, #34007E 0.02%, rgba(229, 229, 229, 0) 235.4%);
  }

  p {
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
  }

  form {
    margin-top: 30px;
    display: flex;

    input {
      width: 100%;
      height: 45px;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      padding-left: 10px;
    }

    button {
      width: 334px;
      height: 45px;
      background: #34007E;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border: 2px solid #fff;
      border-radius: 2px;
      margin-left: 30px;
      cursor: pointer;
      color: #fff;
      font-style: normal;
      text-align: center;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      letter-spacing: -0.02em;
    }
  }

`;
