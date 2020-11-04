import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, textarea, button {
    font: 700 20px 'Nunito', sans-serif;

    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style: none;
  }
`
