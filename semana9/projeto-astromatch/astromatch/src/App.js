import React, { useState, useEffect } from "react";
import axios from 'axios';
import MatchScreen from "./componenets/MatchScreen/matchScreen";
import InitialScreen from "./componenets/initialScreen/initialScreen";
import styled from 'styled-components';

//styles
const ButtonToClearSwipeAndMatch = styled.button`
border: solid tomato 2px;
border-radius:20%;
margin-top:4.10vh;
&:hover{
    cursor:pointer;
    background-color:gray;
}
`
const ContainerFather = styled.div`
display:flex;
justify-content:center;
text-align:center;
background-color: #328fa8;
`
const ContainerChild = styled.div`
border:solid red 10px;
border-radius:17%;
width:50vw;
height:96.4vh;
background-color:white;
`
const StyledBrand = styled.div`
writing-mode: vertical-rl;
font-size:6vh;`

//functional component
function App(props) {
  const [screen, setScreen] = useState('initialScreen')
  const [swipsAndMatches, setSwipsAndMatches] = useState([])


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



  const cleanSwipsAndMatches = async () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/clear`
    try {
      const response = await axios.put(url)

      console.log(response)
    } catch (error) {
      console.log('Erro!! Tente Novamente Mais Trade')

    }

  }
  const clearTheProfile = ()=>{

  }

  useEffect(() => {
    cleanSwipsAndMatches()
  }, [])



  //JSX

  return (
    <div>
      <ContainerFather>
        <StyledBrand>
          <h1>astro</h1>
        </StyledBrand>

        <ContainerChild>

          {changeScreen()}

          <ButtonToClearSwipeAndMatch onClick={clearTheProfile}>Limpar Swipes e Matchs</ButtonToClearSwipeAndMatch>
        </ContainerChild>
        <StyledBrand>
          <h1>match</h1>
        </StyledBrand>
      </ContainerFather>

    </div>
  );
}

export default App;
