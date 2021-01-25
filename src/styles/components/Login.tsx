import styled from "styled-components"
import {
  ColProps,
  Form as BootstrapForm,
  FormProps,
  Col,
  FormTextProps,
} from "react-bootstrap"

export const Title = styled.h1.attrs({
  className: "mt-4",
})`
  & span {
    font-size: calc(100% - 0.2em);
  }
`

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

export const Form = styled(BootstrapForm).attrs(
  (): FormProps => ({
    className: "mt-1 mb-4",
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-bottom: 1px solid black;
`

export const FormWrapper = styled(Col).attrs((): ColProps => ({}))`
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

export const ForgotPassword = styled(Form.Text).attrs(
  (): FormTextProps => ({
    as: "a",
    className: "mt-3",
  })
)`
  font-size: 1.1em;
`

export const SocialAuthsIcons = styled.div.attrs({
  className: "d-flex justify-content-center",
})`
  gap: 1.5em;
`

export const SocialAuths = styled.div.attrs({
  className: "d-flex align-items-center flex-column mb-4",
})`
  text-align: center;
`
