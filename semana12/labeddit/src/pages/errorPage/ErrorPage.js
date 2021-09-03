import React from 'react';
import { BrandAtErrorPage, ButtonOfBrand, ContainerFather } from './Styled';
import { useHistory } from 'react-router-dom';
import { goBackToTheLogInPage } from '../../routes/Coordinator';

const ErrorPage = () => {

    const history = useHistory()

    return (
        <ContainerFather>
            <ButtonOfBrand onClick={() => goBackToTheLogInPage(history)}> <BrandAtErrorPage>Labeddit</BrandAtErrorPage>
            </ButtonOfBrand>

            <h3>Erro, página não encontrada</h3>

            <img src={"https://thumbs.dreamstime.com/b/terra-doente-3341867.jpg"} alt={"Imagem do planeta terra com termômetro e com cara abatida"} />
        </ContainerFather>
    );
};

export default ErrorPage;