import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { imagesUrl } from '../../constants/Urls'
import { Header } from '../../components/StyledHeader';
import { CardContainer, CardInButtonWay, StartButtonContainer } from './Styled';


const GamePage = () => {
    const [cards, setCard] = useState([])

    const getCards = () => {
        const tarotCards = "tarot.json"
        axios.get(tarotCards)
            .then((response) => {
                setCard(response.data.cards)
            }).catch((error) => {
                console.log("deu erro", error.response.data)
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    const renderCards = cards.map((item) => {
        return (
            <div key={item.name}>
                <h4>{item.name}</h4>
                <CardInButtonWay> <img src={`${imagesUrl} ${item.image}`} alt={"Imagem de carta"} /></CardInButtonWay>
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
