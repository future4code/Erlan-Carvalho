import React from 'react';
import {useHistory} from 'react-router-dom';
import Styled from 'styled-components';

const StyledContainer  = Styled.div`
display:flex;
flex-direction:column;
` 

function CreateTripPage() {
    const history = useHistory()

    const goBackToAdminPainel = ()=>{
        history.goBack()
    }


    return (
        <StyledContainer>
            <h2>Criar viagem</h2>
            <input type='text' placeholder='Nome'></input>
            <select>
                <option value='Escolha um planeta'> Escolha um planeta</option>
            </select>
            <input type='number' placeholder='Data'></input>
            <input type='text' placeholder='Descrição'></input>
            <input type='number' placeholder='Duração em dias'></input>
            <div>
                <button onClick={goBackToAdminPainel}>Voltar</button>
                <button>Criar</button>
            </div>
        </StyledContainer>
    );
};
export default CreateTripPage;