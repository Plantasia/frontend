import { Alert, 
         Container, Col, Row, Button, 
         Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import {FaFacebook} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {BiSearchAlt} from 'react-icons/bi'
import Image from 'next/image';
import {TitleRegisterStyle,TitleLabelStyle, LostPassword, BoxRegisterStyle} from '../styles/styledComponents/register/RegisterStyles';



export default function BoxRegister(){

  const InputStyle = styled.div`
  
  input .form-control{
    border-radius:15px;
    box-shadow:0 0 2.9em  red;
  }
  `;

return(
< BoxRegisterStyle>
  <TitleRegisterStyle className="d-flex justify-content-start ml-4">
    Registre-se
  </TitleRegisterStyle>

  <Form >

  <FormGroup className="m-4">
      <TitleLabelStyle>
        <Label for="Email">Seu Nome</Label>
      </TitleLabelStyle>

      <Input type="email" name="email"  id="exampleEmail" placeholder="Digite seu primeiro nome" />
  </FormGroup>

    <FormGroup className="m-4">
      <TitleLabelStyle>
        <Label for="Email">Email</Label>
      </TitleLabelStyle>

      <Input type="email" name="email"  id="exampleEmail" placeholder="Digite seu email" />
    </FormGroup>

    <FormGroup className="mt-4 ml-4 mr-4">
      <TitleLabelStyle>
        <Label for="Password">Password</Label>
      </TitleLabelStyle>

      <InputStyle>
        <Input type="password" name="password" id="examplePassword" placeholder="Sua senha" />
      </InputStyle>
     
    </FormGroup>

    <FormGroup>
    
        <Label className="ml-5">
          <Input type="checkbox" />
            Manter logado
        </Label>
  
    </FormGroup>
  </Form>
  


    <Button   color ="secondary"className="m-2 text-light"  style={
      {
        color:"#1a1a1a"
        
      }

      }>Entrar</Button>
  
  <LostPassword className="align-self-start ml-3">
  Esqueceu sua senha?
</LostPassword>

<hr style={{borderColor:"black"}}></hr>

  <Row className="d-flex align-self-center mt-3">
    Logar com
  </Row>

  <Row  className="d-flex align-self-center">
  
    <Col >
      <AiFillGoogleCircle size={30} />
    </Col>
    <Col >
      <FaFacebook size={30}/>
    </Col>  

  </Row>

</BoxRegisterStyle>
)

}