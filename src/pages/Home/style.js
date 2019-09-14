import styled from 'styled-components';
import BannerImage from '../../assets/code.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: 920px;
`;

export const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 550px;
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;

  .overflow {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px 60px;
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
  width: 465px;
  height: 488px;
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
    font-size: 1.2em;
    background: #ffffff;
    border: 1px solid #696969;
    box-sizing: border-box;
    border-radius: 2px;
  }

  button {
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
