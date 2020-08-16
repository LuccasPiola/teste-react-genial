import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #DADADA;
    color: #000;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }

  h1 {
    font-weight: 300;
    font-size: 20px;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
  }

  p {
    font-weight: 100;
    font-size: 16px;
  }

  h6 {
    font-weight: 300;
    font-size: 14px;
  }

  small {
    font-weight: 300;
    font-size: 12px;
  }

  a {
    color: #364DCD;
    font-weight: 300;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`
