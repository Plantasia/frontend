import CategoriesBar from '../components/CategoriesBar';
import {Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {StyledButtonTheme}  from '../styles/styledComponents/general/StyledButtonTheme';
import {AiOutlinePlus} from 'react-icons/ai';
import Image from 'next/image';
import {MainTitleStyle} from '../styles/styledComponents/categories/MainTitleStyle'

export default function ListCategories(){
  const border ={
    borderColor:"red",
    borderStyle: "solid",
    borderWidth:"2px"

  }

  return (
    <>
    <Container>
        <CategoriesBar/>
    </Container>

    <MainTitleStyle>
      <Container>
        
        <Row>
          <Col xs="10"  className="d-flex align-items-center">
            Categorias
          </Col>
          
          <Col xs ="2" className="d-flex justify-content-center ">

            <StyledButtonTheme className="btn">
              Novo tópico
              <AiOutlinePlus/>
            </StyledButtonTheme>
      
          </Col>

        </Row>

      </Container>
    </MainTitleStyle>


    <Container style={border}className="mt-4">
      <Row >
        
        <Col xs="8"  className="d-flex">
          <Col xs="3" style={border}>
            <Image
            src="/assets/hortalicas.jpg"
            width={200}
            height={200}
            />
          </Col>

          <Col style={border}className="">

            <Row style={border} className="d-flex justify-content-center">
              <h4>Hortaliças</h4>
            </Row>

            <Row style={border} className="d-flex ">
              
                <p className="text-justify p-1 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec turpis elit, porttitor sit amet tellus nec, blandit 
                aliquam sapien. 
                </p>
         
            </Row>

          </Col>

        </Col>
   

        <Col xs="4" style={border}>

          <Row style={border}>
            2.1
          </Row>

          <Row style={border}>
            2.2
          </Row>

        </Col>

      </Row>
    </Container>

    </>
  )


}