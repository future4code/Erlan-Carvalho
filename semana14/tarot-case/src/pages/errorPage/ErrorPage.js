import React from 'react';
import { ComeBack, ButtonToComeBack, ContainerFather } from './Styled';
import { useHistory } from 'react-router-dom';
import { goBackToTheGamePage } from '../../routes/Cordinator'
import { Header } from '../../components/StyledHeader';

const ErrorPage = () => {

    const history = useHistory()

    return (
        <div>
        <Header>The Tarot</Header>
        <ContainerFather>
            <ButtonToComeBack onClick={() => goBackToTheGamePage(history)}> <ComeBack>Voltar</ComeBack>
            </ButtonToComeBack>

            <h3>Erro, página não encontrada</h3>

            <img src={"https://thumbs.dreamstime.com/b/terra-doente-3341867.jpg"} alt={"Imagem do planeta terra com termômetro e com cara abatida"} />
        </ContainerFather>
        </div>
    );
};

export default ErrorPage;