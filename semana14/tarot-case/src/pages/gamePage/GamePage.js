import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tarotCards from '../../tarot.json'

const GamePage = () => {


    return (
        <div>
            {tarotCards.map((content) => {
                return (
                    <div key={content.name}>
                        <h2>{content.name}</h2>
                        <img src={content.image} alt={'imagens da carta'} />
                    </div>
                )
            })}

        </div>
    );
};
export default GamePage;
