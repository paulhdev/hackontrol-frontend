import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 10px 30px;
  background-color: #2f0073;

  img {
    width: 300px;
  }

  nav {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 20px;
  }

  button {
    border: none;
    background: none;
  }

  button i {
    cursor: pointer;
    font-size: 25px;
    color: #fff;
    margin: 0 20px;
  }
`;
