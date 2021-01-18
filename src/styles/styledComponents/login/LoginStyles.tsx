import styled from 'styled-components'


export const  TitleLoginStyle = styled.h2`

font-family: Roboto, sans-serif;
font-weight:bold;


`;
export const TitleLabelStyle = styled.strong`

font-family:Roboto, sans-serif;
font-weight:bold;
-webkit-font-smoothing: antialiased;

`;

export const LostPassword = styled.a`

font-family:Roboto, sans-serif;
font-weight:normal;
color: #999999;

&:hover{
  font-weight:bold;
  color: #006600;
  font-size:1.2em;
  text-decoration: none;
}

`;

export const BoxLoginStyle = styled.div`

border-radius:4px;
box-shadow:0 0 0.3em  #979797;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:space-around;
background-color:white;
padding:10px;

input{
  background-color:#e6e6e6
}

`;





