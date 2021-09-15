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


    useEffect(() => {
        getCards(setTheCards)
    }, [])

    const handlePosition = () => {
        setPosition(true)
    }


    const renderCards = theCards.map((item) => {
        return (
            <div key={item.name}>

                <CardInButtonWay> <h4>{item.name}</h4> <img src={IMAGE_URL + item.image} alt={"Imagem de carta"} /></CardInButtonWay>
            </div>
        );
    });

    const renderBackCards = theCards.map((item) => {
        return (
            <div key={item.name}>
                <CardInButtonWay > <img src={IMAGEBACKCARD_URL} alt={"Imagem de fudno das cartas"} /></CardInButtonWay>
            </div>
        );
    });

    return (
        <div>
            <Header>The Tarot</Header>
            <StartAndShuffleButtonContainer> <button onClick={handlePosition}>Começar</button><button>Embaralhar</button></StartAndShuffleButtonContainer>

            <CardContainer>{position ? renderBackCards : renderCards}
            </CardContainer>
        </div>
    );
};
export default GamePage;
