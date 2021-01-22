import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0 ;
    padding: 0 ;
    outline:0;
    box-sizing: border-box;
  

  }
  body{
    background-color: #f2f2f2;
    -webkit-font-smoothing:antialiased;
  }

  body,button, input{
    font-size:14px;
    font-family: Fira Code, sans-serif;
    font-weight:normal;
  } 

  p{
    font-size:12px;
    font-weight:normal;
    font-family: Fira Code;
  }

`
