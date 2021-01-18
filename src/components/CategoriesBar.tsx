
import {Alert, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Image from 'next/image'
import styled from 'styled-components';
import {TiMessages} from 'react-icons/ti';
import {BsFillBellFill} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {FaCaretSquareDown} from 'react-icons/fa';

 
export default function SearchComponent() {
  
  const SearchComponentStyle = styled.div`
  border-radius:8px;
  max-width:1200px;
  height: 120px;

`;


const border ={
  borderColor:"red",
  borderStyle: "solid",
  borderWidth:"2px"

}

const UserStyleImg={
  borderRadius:"10px"
}

const UserImageStyle = styled.img`
 border-radius:10px;
`
const verticalLine ={

    height:"500px",
    borderColor:"black",
    borderLeft: "2px",
    borderWidth:"2px"
  }
}
 


  return(
  <SearchComponentStyle  className="container mt-3">
     <Row  className=" row justify-content-center">

          <Col    className="d-flex  align-items-center" xs="2">
            <h3 className="justify-self-start">Plantasia</h3>
          </Col>

          <Col xs="7">
            <Input type="hidden" placeholder=" Digite um nome de planta">
        
            </Input>
          </Col>

          <Col  className="d-flex align-items-center justify-content-center mr-1" xs="0.5">
            <TiMessages size={20}/>
          </Col>

          <Col  className="d-flex align-items-center justify-content-center mr-1" xs ="0.5">
          <BsFillBellFill size={20}/>
          </Col>

          <Col  className="d-flex align-items-center justify-content-center mr-2" xs="0.5">
            <BiSearch size={20}/>
          </Col>

          <Col  className="d-flex align-items-center justify-content-center ml-5 mr-1" xs="0.9"> 
           
                <Image
                src="/assets/user_dog.jpeg"
                alt="User Dog"
                width={50}
                height={50}
                className="userImg"
                />
  
             
           
          </Col>

          <Col  className="d-flex align-items-center justify-content-center pl-2" xs="0.8">
            <FaCaretSquareDown size={15}/>
          </Col>
        

    </Row>

    <Row>

          <Col>
              <hr style={{borderColor:"black"}}></hr>
          </Col>

    </Row>
    
</SearchComponentStyle>
  )
}
