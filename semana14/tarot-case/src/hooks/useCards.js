import React, {useState} from 'react';

export const useCards = (initialState)=>{
    const [theCards, setTheCards] = useState(initialState)

    return [theCards, setTheCards]
}
 