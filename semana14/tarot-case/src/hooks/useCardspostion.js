import React, {useState} from 'react';

export const useCardsPosition = (initialState)=>{

    const [position, setPosition] = useState(initialState)

    return [position, setPosition]
}