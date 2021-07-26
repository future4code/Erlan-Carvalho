import React from 'react';
import Styled from 'styled-components';

const ContainerFinalMess = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`

class FinalMessage extends React.Component {
    render() {
        return (
            <ContainerFinalMess>
                <h5>O FORMULÁRIO ACABOU</h5>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </ContainerFinalMess>

        )
    };
};
export default FinalMessage;