import {Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FaFacebook} from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {BiSearchAlt} from 'react-icons/bi'
import Image from 'next/image';
import SearchComponent  from '../components/SearchComponentBar'
import {TitleLoginStyle,TitleLabelStyle, LostPassword} from '../styles/styledComponents/login/LoginStyles';
import BoxLogin from '../components/BoxLogin'



export default function Login(){
  const border ={
    borderColor:"red",
    borderStyle: "solid",
    borderWidth:"2px"

  }

  return(
    <Container >

        <SearchComponent/>

        <Container >
            <Row>

                  <Col style={{borderColor:'red'}}>
                    
                    <Image
                      className="mt-2"
                    src="/assets/img_provisoria.png"
                    width={750}
                    height={600}
                    />

                  </Col>
                
                  <Col xs="5">

                    <BoxLogin/>

                  </Col>
          
            </Row>

      </Container>

  </Container>
  )
}