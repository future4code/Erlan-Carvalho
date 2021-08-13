import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Styles 

const ContainerChild = styled.div`
border:solid red 10px;
border-radius:17%;
width:50vw;
height:95.7vh;
background-color:white;
`
const ButtonsStyled = styled.button`
height:9vh;
width:10vw;
font-size:6vh;
border:solid red 3px;
border-radius:45%;
margin-top:1vh;
&:hover{
    cursor:pointer;
    background-color:gray;
}`


const ContainerOfTheButtonWithTheTitle = styled.div`
display:grid;
grid-template-columns:3.7fr 1fr;
justify-content:center;
padding:1vh 3.5vw;

justify-content:center;
`

// Functional component 
function MatchScreen(props) {
  // const [people, setPeople] = useState({})


  const getPeopleWhoImetch = async () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/matches"
    try {
        const response = await axios.get(url)
        // setPeople(people.response.profile)
        console.log(response.data)
    } catch (error) {
       console.log('Erro, tente novamente ') 
    }

}

useEffect(()=>{
  getPeopleWhoImetch()
},[])


  //JSX
  return (
    <div>
      <ContainerOfTheButtonWithTheTitle>
        <h3>Matchs</h3>
        <ButtonsStyled onClick={props.gotoInitialScreen}>🔙 </ButtonsStyled>
      </ContainerOfTheButtonWithTheTitle>
      <hr />
      {/* <img src={people.photo}/> */}
      {/* <h6>{people.name}, {people.age} </h6> */}
      <hr />
    </div>


  );
};
export default MatchScreen;