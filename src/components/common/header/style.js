import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 72px;
  padding: 10px 30px;
  background-color: #2f0073;

  z-index: 9999;

  nav {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 10px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  button i {
    font-size: 25px;
    color: #fff;
    margin: 0 20px;
  }
`;
