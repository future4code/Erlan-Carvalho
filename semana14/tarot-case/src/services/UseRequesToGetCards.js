import axios from 'axios';


export const getCards = (setTheCards) => {
    axios.get("tarot.json")
        .then((response) => {
            setTheCards(response.data.cards)
        }).catch((error) => {
            console.log("deu erro", error.response)
        })
}