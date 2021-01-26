import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-Light.ttf");
    font-style: light;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-Medium.ttf");
    font-style: light;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-ExtraBold.ttf");
    font-style: light;
    font-weight: 800;
    font-display: swap;
  }

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

  body::-webkit-scrollbar{
    display:none;
  }

  body,button, input {
    font-size:14px;
    font-family: "Roboto Slab", sans-serif;
    font-weight:normal;
  } 
  
  h3 {
    font-family: "Roboto Slab", sans-serif;
    font-weight: 500;
  }

  p{
    font-size:12px;
    font-weight:normal;
    font-family: Fira Code;
  }

`
