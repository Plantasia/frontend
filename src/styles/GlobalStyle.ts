import { createGlobalStyle, css } from "styled-components"

const loadFonts = css`
  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-Light.ttf");
    font-style: light;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-Regular.ttf");
    font-style: regular;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-Medium.ttf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Slab";
    src: url("/assets/fonts/RobotoSlab-ExtraBold.ttf");
    font-style: bold;
    font-weight: 800;
    font-display: swap;
  }
`

export default createGlobalStyle`
  ${loadFonts}
  * {
    margin: 0 ;
    padding: 0 ;
    outline:0;
    box-sizing: border-box;
    font-family: "Roboto Slab";
    font-weight: 300;
  }

  body {
    background-color: #f2f2f2;
    -webkit-font-smoothing:antialiased;
    & ::-webkit-scrollbar{
     display:none;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  .ck-editor__editable_inline {
    min-height: 200px;
  }

`
