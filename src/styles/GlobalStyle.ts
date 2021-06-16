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
  html{
    height: auto;
    overflow: auto
  }
  body {
    height: 100%;
    background-color: #f2f2f2;
    -webkit-font-smoothing: antialiased;
    & ::-webkit-scrollbar{
     display:none;
    }
  }

  a {
    cursor: pointer;
  }
  .ck-editor__editable_inline {
    min-height: 200px;
  }

  .ck-editor__editable{
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  blockquote {
    border-left: 5px solid #624378;
    padding-left: 13px;
    padding-right: 13px;
    background-color: rgba(98, 67, 120 ,0.04);
    border-radius: 8px;
  }

  .seed-owner {
    font-weight: bold;
  }

  #__next{
    height: 100%;
    overflow: auto
  }

`
