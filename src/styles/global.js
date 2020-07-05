import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: #19181f;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    margin: 0 auto;
    max-width: 980px;
    padding: 40px 20px;
  }

`;
