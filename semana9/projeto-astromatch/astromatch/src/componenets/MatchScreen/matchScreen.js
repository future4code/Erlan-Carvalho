import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Styles 

const ButtonsStyled = styled.button`
height:9vh;
width:10vw;
font-size:6vh;
border:solid red 3px;
border-radius:45%;
margin-top:1vh;
&:hover{
    cursor:pointer;
    background-image:linear-gradient(to bottom,white,#FF533D, black);

}`
const MatchImage = styled.img`
height:12vh;
width:7vw;
image-resolution:25px;
border:solid black 1px;
border-radius:25%;`

const TextOfTheMatchInfo = styled.h6`
margin-bottom:15vh;
display:inline-block;
`

const ContainerOfTheButtonWithTheTitle = styled.div`
display:grid;
grid-template-columns:3.7fr 1fr;
justify-content:center;
padding:1vh 3.5vw;
justify-content:center;
background-color:#FF533D;
`
const ContaiinerOfTheMatches = styled.div`
display:grid;
grid-template-columns:1fr 5fr 1fr;
border:solid black 2px;
height:13vh;
width:auto;

`

// Functional component 
function MatchScreen(props) {
  const [profilesWhoImetch, setprofilesWhoImetch] = useState([])


  const getPeopleWhoImetch = async () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/matches"
    try {
      const response = await axios.get(url)
      console.log(response.data)
      setprofilesWhoImetch(response.data.matches)
    } catch (error) {
      console.log('Erro na tela de match, tente novamente ')
    }

  }

  useEffect(() => {
    getPeopleWhoImetch()
  }, [getPeopleWhoImetch])



  //JSX
  return (
    <div>
      <ContainerOfTheButtonWithTheTitle>
        <h3>Matchs</h3>
        <ButtonsStyled onClick={props.gotoInitialScreen}>🔙 </ButtonsStyled>
      </ContainerOfTheButtonWithTheTitle>

      <div>
        {profilesWhoImetch.map((profile) => (
          <ContaiinerOfTheMatches key={profile.id}>
            <MatchImage src={profile.photo} alt={"Imagem de perfil"} />
            <TextOfTheMatchInfo>{profile.name}, {profile.age}</TextOfTheMatchInfo>
          </ContaiinerOfTheMatches>
        ))}
      </div>
    </div>


  );
};
export default MatchScreen;