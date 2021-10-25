import React from 'react';
import styled from 'styled-components';

 const StyleDiv= styled.div `
display:flex;
flex-direction: row;
align-items: start;
border: 1px solid black;
width: auto;
padding: 15px 10px;
margin: 10px auto;
`;

 const StyleImg= styled.img`
  width: 30px;
    margin-right: 10px;
`;


function CardPequeno(props) {
    return (
        <StyleDiv>
        <StyleImg src={props.imagemCardPequeno}/>
        <h6>{props.TxemailEndereco}</h6>
        <p>{props.CoEmailEndereco}</p>
        </StyleDiv>

    )

}
export default CardPequeno;