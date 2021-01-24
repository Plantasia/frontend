import styled from "styled-components"

export const StyledButtonTheme = styled.button`
  background-color: #c4c4c4;
  margin: 0.2vw 0.3vh;
  padding: 0 -2px;
  border: solid 1px #c4c4c4;
  height: 55px;
  border-radius: 6px;
  display: inline-block;
  line-height: 40px;
  transition: filter 0.4s;
  transition: opacity 0.2s;

  &:hover {
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    transition: filter 0.4s;
    opacity: 0.6;
  }
`
