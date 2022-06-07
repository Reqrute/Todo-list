import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }
  #root {
    display: flex;
    background: linear-gradient(to bottom, #335af5, #6c5b7bda);
  }

  button {
  display: inline-block;
  padding: 2px 2px;
  font-size: 10px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: black;
  background-color: #576feb;
  border: 1px ;
}

button:hover {background-color: #4b5fc9}

button:active {
  background-color: #4b5fc9;
  transform: translateY(1px);
}
  `