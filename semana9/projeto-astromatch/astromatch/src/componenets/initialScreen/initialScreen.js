import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//styles 
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

const ButtonsSwipeAndMatchContainer = styled.div`
display:flex;
align-items: flex-end;
justify-content:center;
justify-content: space-evenly;
`

const ContainerOfProfile = styled.div`
border:solid tomato 3px;
border-radius:10%;
`

const StyledImage = styled.img`
height:36vh;
width:20vw;
`

//functional component

function InitialScreen(props) {
    const [people, setPeople] = useState({})


    const getPeople = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/person"
        try {
            const response = await axios.get(url)
            console.log(response.data)
            setPeople(response.data.profile)


        }

        catch (error) {
            console.log('Erro inesperado. Tente Novamente Mais Tarde')
            console.log(error.response)

        }
    }

 
    const chooseProfile = async (choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/choose-person"

        try {
            const response = await axios.post(url, {
                id: people.id,
                choice: choice
            })
            console.log(response)
            getPeople()
        } catch (error) {
            console.log("Erro, tente novamnete")
        }
    }

    const chooseProfileYes = () => {
        chooseProfile(true)
        console.log('entrei na função yes')
    }
    const chooseProfileNo = () => {
        chooseProfile(false)
        console.log("entrei na função no")
    }

    useEffect(() => {
        getPeople()

    }, [])


    //JSK       

    return (

        <div>
            <ContainerOfTheButtonWithTheTitle>
                <h3>Astromatch</h3>
                <ButtonsStyled onClick={props.goToMatchScreen}>💌 </ButtonsStyled>
            </ContainerOfTheButtonWithTheTitle>
            <hr />
            <ContainerOfProfile>
                <StyledImage src={people.photo} alt={'Imagem de perfil'} />
                <p><strong>{people.name}</strong>, {people.age}</p>
                <h5>{people.bio}</h5>
            </ContainerOfProfile>
            <ButtonsSwipeAndMatchContainer>
                <ButtonsStyled onClick={chooseProfileNo}>X</ButtonsStyled>
                <ButtonsStyled onClick={chooseProfileYes}>♥️</ButtonsStyled>
            </ButtonsSwipeAndMatchContainer>
            <hr />
        </div>

    );
};
export default InitialScreen;