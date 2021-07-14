import React from 'react';
import styled from 'styled-components';


const DivContainer= styled.div `
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px; `;


const StyleImg= styled.img `
width: 70px;
margin-right: 10px;
border-radius: 50%;
`;

const StyleH4= styled.h4 `
margin-bottom: 15px;
`
const StyleDivInner= styled.div ` 
display: flex;
flex-direction: column;
justify-items: flex-start;
`


function CardGrande(props) {
    return (
        < DivContainer>
            <StyleImg src={ props.imagem } />
            <StyleDivInner>
                <StyleH4>{ props.nome }</StyleH4>
                <p>{ props.descricao }</p>
            </StyleDivInner>
        </ DivContainer>
    )
}

export default CardGrande;