import CategoriesBar from '../components/CategoriesBar';
import {Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {StyledButtonTheme}  from '../styles/styledComponents/general/StyledButtonTheme';
import {CustomTextInfoItems} from '../styles/styledComponents/categories/CustomTextInfoItems';
import {CategoriesItemsStyle} from '../styles/styledComponents/categories/CategoriesItemsStyles';

import {AiOutlinePlus} from 'react-icons/ai';
import Image from 'next/image';
import {MainTitleStyle} from '../styles/styledComponents/categories/MainTitleStyle'
import React from 'react';

export default function ListCategories(){
  const border ={
    borderColor:"red",
    borderStyle: "solid",
    borderWidth:"2px"

  }

  const borderBlack ={
    borderColor:"black",
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

    <CategoriesItemsStyle className="container mt-4 pr-4 pt-4 pl-1 pb-3">
        <Row >
          
          <Col xs="8"  className="d-flex">
            <Col xs="3" >
              <Image
              src="/assets/hortalicas.jpg"
              width={200}
              height={200}
              />
            </Col>

            <Col className="">

              <Row  className="d-flex justify-content-start ">
                <h4>Hortaliças</h4>
              </Row>

              <Row  className="d-flex ">
                
                  <p className="text-justify p-1 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec turpis elit, porttitor sit amet tellus nec, blandit 
                  aliquam sapien. 
                  </p>
          
              </Row>

            </Col>

          </Col>

          <div style={{borderColor:"black",borderLeft:"2px"}}></div>

          <Col xs="4" >

            {/*Begin Detailed Info Component*/}
            <Row >
              <Col>
                <Row style={borderBlack} className="justify-content-center ">
                  <CustomTextInfoItems>Topics</CustomTextInfoItems>
                </Row>

                <Row style={borderBlack} className="justify-content-center ">
                    162
                </Row>

              </Col>

              <Col>
                <Row style={borderBlack} className="justify-content-center ">
                  <CustomTextInfoItems> Atividades</CustomTextInfoItems>
                </Row>

                <Row style={borderBlack} className="justify-content-center "> 
                  150
                </Row>

              </Col>

              <Col>

                  <Row style={borderBlack} className="justify-content-center ">
                     <CustomTextInfoItems className="d-flex"> Usuários </CustomTextInfoItems>
                  </Row>

                  <Row style={borderBlack} className="justify-content-center ">
                    156
                  </Row>

              </Col>

            </Row>
            {/*Begin Detailed Info Component*/}


                <Container fluid="">
                  <hr style={{borderColor:" #666666", borderWidth:"2px"}}></hr>
                </Container>
            
            {/* Bottom info */}
              <Row style={border} className="justify-content-start pl-4"> 
                <CustomTextInfoItems >  Ultimo tópico </CustomTextInfoItems>
              </Row>

              <Row style={border} className="justify-content-start pl-4">
                   bblalsdl
              </Row>
            {/* Bottom info */}
        

          </Col>

        </Row>
    </CategoriesItemsStyle>

   </>
  )


}