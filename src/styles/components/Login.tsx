import styled from "styled-components"
import { Form as BootstrapForm, FormProps } from "react-bootstrap"

export const FormTitle = styled.h1.attrs({
  className: "mt-3",
})``

export const TitleLabelStyle = styled.strong`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
`

export const LostPassword = styled.a`
  font-family: Roboto, sans-serif;
  color: #999999;
  &:hover {
    color: #006600;
    text-decoration: none;
  }
`

export const Form = styled(BootstrapForm).attrs((): FormProps => ({}))`
  background-color: white;
  box-shadow: 0 0 15px #c4c4c4;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 30px;
`

export const Label = styled(BootstrapForm.Label)`
  font-size: 1.5em;
`
