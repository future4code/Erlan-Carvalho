import React, { useEffect, useState } from 'react';
import { getCards } from '../../services/UseRequesToGetCards';
import { IMAGE_URL, IMAGEBACKCARD_URL } from '../../constants/Urls'
import { Header } from '../../components/StyledHeader';
import { CardContainer, CardInButtonWay, StartAndRestartButtonContainer, BoxOfTheFrontCards, ConatinerFatherOfThePopUp, DescriptionContainer } from './Styled';
import { useCards } from '../../hooks/useCards';
import Popup from '../../services/popUpService/popUpAction'
import ReactCardFlip from 'react-card-flip';


const GamePage = () => {

    const [theCards, setTheCards] = useCards([])

    const [appear, setAppear] = useState(false)

    const [isFlipped, setIsFlipped] = useState(false)


    useEffect(() => {
        getCards(setTheCards)
    })


    const alternateTheAppearingOfThePopUp = (name) => {
        setAppear(!appear)
    }

    const handleFlipCard = () => {
        setIsFlipped(!isFlipped)
    }



    const showTheEntireCards = theCards && theCards.map((item) => {
        return (
            <ReactCardFlip key={item.name} isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                    <BoxOfTheFrontCards>
                        <h4>{item.name}</h4>
                        <img onClick={alternateTheAppearingOfThePopUp} src={IMAGE_URL + item.image} alt={"Imagem de carta"} />
                    </BoxOfTheFrontCards>
                </div>

                <div onClick={() => setIsFlipped((prev) => !prev)}>
                    <CardInButtonWay >
                        <img src={IMAGEBACKCARD_URL} alt={"Imagem de fundo das cartas"} />
                    </CardInButtonWay>
                </div>
            </ReactCardFlip>

        )
    })

    const shuffleCards = () => {
        for (let i = theCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = theCards[i];
            theCards[i] = theCards[j];
            theCards[j] = temp;
        }

    }


    return (
        <div>

            <Header>The Tarot</Header>
            <StartAndRestartButtonContainer>
                <button onClick={handleFlipCard}>{isFlipped ? <p>Reiniciar </p> : <p onClick={shuffleCards}>Iniciar e Embaralhar </p>}
                </button>
            </StartAndRestartButtonContainer>



            <CardContainer>
                { showTheEntireCards}
            </CardContainer>



            {
                appear && <Popup content={<ConatinerFatherOfThePopUp>
                    <div>
                        {showTheEntireCards}
                    </div>
                    <DescriptionContainer>
                        <h3>Descrição </h3  >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et beatae molestias voluptate repudiandae veniam quo suscipit doloremque, recusandae nisi dolorem dolores ullam debitis autem placeat dicta, maiores doloribus commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et beatae molestias voluptate repudiandae veniam quo suscipit doloremque, recusandae nisi dolorem dolores ullam debitis autem placeat dicta, maiores doloribus commodi! recusandae nisi dolorem dolores recusandae nisi dolorem dolores
                        </p>
                    </DescriptionContainer>
                </ConatinerFatherOfThePopUp>}
                    closeThePopUp={alternateTheAppearingOfThePopUp} />
            }

        </div >

    );
};
export default GamePage;
