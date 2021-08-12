import React, {useState, useEffort, useEffect} from 'react';
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
background-color:white;
`
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
justify-content:center;`


const ButtonsSwipeAndMatchContainer = styled.div`
display:flex;
align-items: flex-end;
justify-content:center;
justify-content: space-evenly;
padding-top:50vh;
padding-bottom: 0px;
`

function InitialScreen (props){
    const [ people, setPeople] = useState({})


  const getPeople= async ()=>{
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
    try{
      const response = await axios.get(url)
      console.log(response.data)
      setPeople(response.data)
    }
   
    catch(error){
        alert('Erro inesperado. Tente Novamente Mais Tarde')
    }

}


    return (
        <ContainerFather>
        <ContainerChild>
            <ContainerOfTheButtonWithTheTitle>
             <h3>Astromatch</h3>
             <ButtonsStyled onClick={props.goToMatchScreen}>💌 </ButtonsStyled>
             </ContainerOfTheButtonWithTheTitle>
             <hr/>
          <img src= {people.photo}/>

          <ButtonsSwipeAndMatchContainer>
        <ButtonsStyled>X</ButtonsStyled>
        <ButtonsStyled>♥️</ButtonsStyled>
        </ButtonsSwipeAndMatchContainer>

         </ContainerChild>
        </ContainerFather>
    );
};
export default InitialScreen;