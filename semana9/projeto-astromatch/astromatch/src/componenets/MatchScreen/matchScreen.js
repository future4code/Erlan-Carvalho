import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerFather = styled.div`
display:flex;
justify-content:center;
text-align:center;
background-color:#c92a0a;
`
const ContainerChild = styled.div`
border:solid black 1px;
width:50vw;
height:99.7vh;
background-color:white;`

const ButtonsStyled = styled.button`
height:9vh;
width:10vw;
font-size:6vh;
border:solid red 3px;
border-radius:45%;
&:hover{
    cursor:pointer;
    background-color:gray;
}`

const ContainerOfTheButtonWithTheTitle = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
justify-content:center;
padding:3.5vh;
`


function MatchScreen (props){
    return (
    <ContainerFather>
      <ContainerChild>
       <ContainerOfTheButtonWithTheTitle>
          <h3>Matchs</h3>
          <ButtonsStyled onClick={props.gotoInitialScreen}>🔙 </ButtonsStyled>
       </ContainerOfTheButtonWithTheTitle>
            <hr/>
      </ContainerChild>
    </ContainerFather>
    );
}; 
export default MatchScreen;