import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {IMAGE_URL} from '../../constants/Urls'
import {Header} from '../../components/StyledHeader';
import {CardContainer, CardInButtonWay, StartButtonContainer } from './Styled';


const GamePage = () => {
    const [theCards, setTheCards] = useState([])

    const getCards = () => {
        // const tarotCards = "tarot.json"
        axios.get("tarot.json")
            .then((response) => {
                setTheCards(response.data.cards)
            }).catch((error) => {
                console.log("deu erro", error.response)
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    const renderCards =  theCards.map((item) => {
        return (
            <div key={item.name}>
                <h4>{item.name}</h4>
                <CardInButtonWay> <img src={IMAGE_URL+item.image} alt={"Imagem de carta"} /></CardInButtonWay>
            </div>
        );
    });

    return (
        <div>
            <Header>The Tarot</Header>
            <StartButtonContainer> <button>Começar</button></StartButtonContainer>
            <CardContainer>{renderCards}</CardContainer>
        </div>
    );
};
export default GamePage;
