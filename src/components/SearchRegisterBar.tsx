import {
  Alert,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"
import styled from "styled-components"

interface IUser {
  name: string
  id?: string
}
export default function SearchComponent({ id = null, name }: IUser) {
  const SearchComponentStyle = styled.div`
    border-radius: 8px;
    max-width: 1200px;
    height: 120px;
  `
  return (
    <SearchComponentStyle className="row align-content-center">
      <Col xs="2" className="align-self-start justify-content-center ">
        <h3 className="align-self-start justify-self-center">Plantasia</h3>
      </Col>

      <Col xs="8">
        <Input type="text" placeholder=" Digite um nome de planta"></Input>
      </Col>

      <Col xs="2">
        {id ? (
          <div className="d-flex justify-content-center ">
            <h5 className="align-self-center">{name}</h5>
          </div>
        ) : (
          <div className="d-flex justify-content-center ">
            <h5 className="align-self-center">Login</h5>
          </div>
        )}
      </Col>

      <Col>
        <hr style={{ borderColor: "black" }}></hr>
      </Col>
    </SearchComponentStyle>
  )
}
