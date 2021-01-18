import {Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FaFacebook} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {BiSearchAlt} from 'react-icons/bi'
import Image from 'next/image';
import SearchRegisterBar  from '../components/SearchRegisterBar'
import BoxRegister from '../components/BoxRegister';



export default function Login(){
  const border ={
    borderColor:"red",
    borderStyle: "solid",
    borderWidth:"2px"

  }

  return(
    <Container  >

        <SearchRegisterBar/>

        <Container className="mt-5 mb-5" >
            <Row >
                  <Col style={{borderColor:'red'}}>
                    
                    <Image
                      className="mt-2"
                    src="/assets/img_provisoria.png"
                    width={750}
                    height={600}
                    />

                  </Col>
                
                  <Col xs="5">

                    <BoxRegister/>

                  </Col>
            </Row>
      </Container>

  </Container>
  )
}