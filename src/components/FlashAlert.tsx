import React, { ReactElement, useEffect, useState } from "react"
import { Alert, AlertProps } from "react-bootstrap"
import styled from "styled-components"
import Bus from "@utils/Bus"

export const ErrorAlert = styled(Alert).attrs(
  (): AlertProps => ({
    variant: "danger",
    className: "mb-3",
  })
)``
const FixedAlert = styled(Alert)`
  position: fixed;
  right: 15px;
  top: 15px;
  left: auto;
  z-index: 99;
`

export const FlashAlert: React.FC = props => {
  const [visibility, setVisibility] = useState(false)
  const [message, setMessage] = useState("")
  const [type, setType] = useState("")

  useEffect(() => {
    Bus.addListener("flash", ({ message, type }) => {
      setVisibility(true)
      setMessage(message)
      setType(type)
      setTimeout(() => {
        setVisibility(false)
      }, 4000)
    })
  }, [])

  return visibility && <FixedAlert variant={type}>{message}</FixedAlert>
}
