import styled from 'styled-components';

export  const CustomTextInfoItems= styled.p`
 color: #444343;
 font-family: Fira Code, sans-serif;
 line-height:20px;
 transition:filter .4s;


&:hover{
  font-weight:bold;
  filter: brightness(80%);
  color: #4d4d4d;
}

`