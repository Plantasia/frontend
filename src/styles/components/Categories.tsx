import styled from "styled-components"

export const MainTitleStyle = styled.h4`
  font-family: sans-serif;
`
export const CustomTextInfoItems = styled.p`
  color: #444343;
  font-family: Fira Code, sans-serif;
  line-height: 20px;
  transition: filter 0.4s;

  &:hover {
    font-weight: bold;
    filter: brightness(80%);
    color: #4d4d4d;
  }
`
export const CategoriesItemsStyle = styled.div`
  background-color: transparent;
  box-shadow: -1px 1.5px 3px 0px #0000004f;
  font-family: Roboto, sans-serif;
  font-weight: normal;
`
