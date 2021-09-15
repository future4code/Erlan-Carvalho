import React, { useEffect } from 'react';
import { getCards } from '../../services/UseRequesToGetCards';
import { IMAGE_URL, IMAGEBACKCARD_URL } from '../../constants/Urls'
import { Header } from '../../components/StyledHeader';
import { CardContainer, CardInButtonWay, StartAndShuffleButtonContainer } from './Styled';
import { useCards } from '../../hooks/useCards';
import { useCardsPosition } from '../../hooks/useCardspostion';


const GamePage = () => {

    const [theCards, setTheCards] = useCards([])

    const [position, setPosition] = useCardsPosition(false)

    const turnTheCard = () => {
        if (!position) {
            setPosition(theCards)
        } else {
            setPosition(setTheCards(theCards.map((back) => {
                return (
                    <div key={back.name}>
                        <CardInButtonWay> <img src={IMAGEBACKCARD_URL + back.image}
                            alt={"Imagem de fundo das cartas"} /></CardInButtonWay>
                    </div>
                )
            })))
        }
    }

    useEffect(() => {
        getCards(setTheCards)
    }, [])

    const renderCards = theCards.map((item) => {
        return (
            <div key={item.name}>
                <h4>{item.name}</h4>
                <CardInButtonWay> <img src={IMAGE_URL + item.image} alt={"Imagem de carta"} /></CardInButtonWay>
            </div>
        );
    });

    return (
        <div>
            <Header>The Tarot</Header>
            <StartAndShuffleButtonContainer> <button onClick={turnTheCard}>Começar</button><button>Embaralhar</button></StartAndShuffleButtonContainer>
            <CardContainer>{renderCards}</CardContainer>
        </div>
    );
};
export default GamePage;
