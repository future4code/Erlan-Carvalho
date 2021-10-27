import React from 'react';
import styled from 'styled-components'

 const StyleDiv= styled.div `
 display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`;

 const StyleImg= styled.img ` 
 width: 30px;
    margin-right: 10px;
`;

function ImagemButton(props) {
    return (
        <StyleDiv>
            <StyleImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </StyleDiv>

    )
}

export default ImagemButton;