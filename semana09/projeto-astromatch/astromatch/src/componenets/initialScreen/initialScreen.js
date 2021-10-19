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
    background-image:linear-gradient(to bottom,white,#FF533D, black);
}`

const ContainerOfTheButtonWithTheTitle = styled.div`
display:grid;
grid-template-columns:3.7fr 1fr;
justify-content:center;
padding:1vh 3.5vw;
justify-content:center;
background-color:#FF533D;
`

const ButtonsSwipeAndMatchContainer = styled.div`
display:flex;
align-items: flex-end;
justify-content:center;
justify-content: space-evenly;

`
const StyledImage = styled.img`
margin-top:1vh;
height:36vh;
width:30vw;
`

//functional component

function InitialScreen(props) {
    const [people, setPeople] = useState({})

    const getPeople = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erlan-carvalho-lovelace/person"
        try {
            const response = await axios.get(url)
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
                <h3 >Astromatch</h3>
                <ButtonsStyled onClick={props.goToMatchScreen}>💓 </ButtonsStyled>
            </ContainerOfTheButtonWithTheTitle>

            <div>
                <StyledImage src={people.photo} alt={'Imagem de perfil'} />
                <p><strong>{people.name}</strong>, {people.age}</p>
                <h5>{people.bio}</h5>
            </div>
            <ButtonsSwipeAndMatchContainer>
                <ButtonsStyled onClick={chooseProfileNo}>X</ButtonsStyled>
                <ButtonsStyled onClick={chooseProfileYes}>💕 </ButtonsStyled>
            </ButtonsSwipeAndMatchContainer>
            <hr />
        </div>

    );
};
export default InitialScreen;