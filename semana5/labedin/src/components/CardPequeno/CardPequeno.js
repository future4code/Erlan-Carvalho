import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className= "card-pequeno-container">
        <img src={props.imagemCardPequeno}/>
        <h6>{props.TxemailEndereco}</h6>
        <p>{props.CoEmailEndereco}</p>
        </div>

    )

}
export default CardPequeno;