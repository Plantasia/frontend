import {Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';
import {FaFacebook} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai';
import GlobalStyle from '../src/styles/GlobalStyle';
import Image from 'next/image';


  const SearchComponent = styled.div`
  border:solid 1px red;
  border-radius:8px;
  max-width:1200px;
  height: 120px;
  `;


  const BoxLogin = styled.div`
  /*display:flex
  flex-direction:column;
  justify-content: center;
  align-items:center; */
  border:solid 1px red;
  border-radius:4px;
  display:flex;
  flex-direction:column;
  justify-content:stretch;
  align-items:center;
  background-color:#ececec;

`;

  const TestingBorder = styled.col`
  border:solid 1px red ;
  `

export default function Login(){

  return(
    <>
    <Container>
     <SearchComponent>Search Component</SearchComponent>
    </Container>

    <Container>
      <Row>
        <Col>
          
        </Col>
      
        <Col>
        <BoxLogin>

                <Form >

                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                  </FormGroup>

                  <FormGroup>
                      <Label check>
                        <Input type="checkbox" />{' '}
                          Check me out
                      </Label>
                  </FormGroup>
                </Form>
                
              

              <Button className="m-1" color="primary">Entrar</Button>

              <hr></hr>

                <Row>
                  Logar com
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                 
                  <Col className="col">
                    <AiFillGoogleCircle/>
                  </Col>
                  <Col className="col">
                     <FaFacebook/>
                  </Col>  

                </Row>

            
        </BoxLogin>
        </Col>
    
       
   </Row>
  </Container>
  <GlobalStyle/>
  </>
  )
}