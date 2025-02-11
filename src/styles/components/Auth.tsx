import styled, { css } from "styled-components"
import {
  ColProps,
  Form as BootstrapForm,
  FormProps,
  Col,
  FormTextProps,
  FormCheckProps,
} from "react-bootstrap"

import {
  FaFacebook,
  FaGoogle,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"
import { IconBaseProps } from "react-icons/lib"

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
    className: "py-2 d-flex flex-column",
  })
)``

export const FormWrapper = styled(Col).attrs(
  (): ColProps => ({
    className: "py-4 px-4 d-flex flex-column",
  })
)`
  background-color: white;
  box-shadow: 0 0 15px #c4c4c4;
  border-radius: 10px;
`

export const Label = styled(BootstrapForm.Label)`
  font-size: 1.5em;
`

export const AuxLink = styled(Form.Text).attrs(
  (): FormTextProps => ({
    as: "a",
  })
)`
  font-size: 1.25em;
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

const pointer = css`
  cursor: pointer;
`

export const FacebookIcon = styled(FaFacebook).attrs(
  (): IconBaseProps => ({
    size: "2em",
  })
)`
  ${pointer}
`

export const GoogleIcon = styled(FaGoogle).attrs(
  (): IconBaseProps => ({
    size: "2em",
  })
)`
  ${pointer}
`

export const TermsCheck = styled(Form.Check).attrs(
  (): FormCheckProps => ({
    type: "checkbox",
    className: " my-1",
  })
)`
  & input {
    display: block;
    align-items: center;
    margin-top: 4px;
  }
`
