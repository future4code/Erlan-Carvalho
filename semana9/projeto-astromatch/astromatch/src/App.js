import React, { useState, useEffect } from "react";
import axios from 'axios';
import MatchScreen from "./componenets/MatchScreen/matchScreen";
import InitialScreen from "./componenets/initialScreen/initialScreen";
import styled from 'styled-components';

//styles
const ButtonToClearSwipeAndMatch = styled.button`
border: solid tomato 2px;
border-radius:7%;
margin-top:4.10vh;
height:8vh;
width:10vw;
font-size:4vh;
&:hover{
    cursor:pointer;
    background-image:linear-gradient(to bottom,white,#FF533D, black);
}
`
const ContainerFather = styled.div`
display:flex;
justify-content:center;
text-align:center;
background-image:linear-gradient(to bottom,black,#2596be, white);
`
const ContainerChild = styled.div`
border:solid black 2px;
width:50vw;
height:99vh;
background-image:linear-gradient(to bottom,black,#2596be, white);
;
`
const StyledBrand = styled.div`
writing-mode: vertical-rl;
font-size:6vh;`

//functional component
function App(props) {
  const [screen, setScreen] = useState('initialScreen')

  const changeScreen = () => {
    switch (screen) {
      case ('initialScreen'):
        return <InitialScreen goToMatchScreen={changetoTheMatchScreen} />
      case ('matchScreen'):
        return <MatchScreen gotoInitialScreen={changeToTheInitialScreen} />
      default:
        return <h2>Error, love not found </h2>
    }
  }

  const changetoTheMatchScreen = () => {
    setScreen('matchScreen')
  }
  const changeToTheInitialScreen = () => {
    setScreen('initialScreen')

  }



  const cleanSwipsAndMatches = async (props) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/clear`
    try {
      const response = await axios.put(url)
      alert("Matchs e deslikes apagados!!")
    }

    catch (error) {
      console.log('Erro!! Tente Novamente Mais Trade')

    }

  }


  //JSX

  return (
      <ContainerFather>
        <StyledBrand>
          <h1>astro</h1>
        </StyledBrand>
        <ContainerChild>
          {changeScreen()}
          <ButtonToClearSwipeAndMatch onClick={cleanSwipsAndMatches}>Limpar </ButtonToClearSwipeAndMatch>
        </ContainerChild>
        <StyledBrand>
          <h1>match</h1>
        </StyledBrand>
      </ContainerFather>
  );
}

export default App;
