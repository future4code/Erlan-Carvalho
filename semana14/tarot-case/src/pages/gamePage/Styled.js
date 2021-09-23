import Styled from 'styled-components';

export const CardContainer = Styled.div`
display:grid;
justify-items:center;
align-items:center;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr ;

`
export const BoxOfTheFrontCards = Styled.div`
align-items:center;
background-color:white;
height:45vh; 
width:15vw;
margin-bottom:13vh;
background-image:linear-gradient(to bottom,white,silver,black);
img{
    height:45vh;
    width:15vw;
    &:hover{
        cursor:pointer;
    }
}
h4{
    text-align:center;
}
`

export const CardInButtonWay = Styled.button`
border:none;
background:none;
align-items:center;
background-color:white;
height:45vh; 
width:15vw;
&:hover{
    cursor:pointer;
    transform: scale(1.2);
        transition: all 0.2s; 
        margin-right:2vw;
        margin-left:1vw;
}
img{
    height:45vh;
    width:15vw;
}


`
export const StartAndRestartButtonContainer= Styled.div`
height:8vh;
margin:5vh;
display:flex;
justify-content:center;
justify-content:space-evenly;
width: 30%;
margin-left:auto;
margin-right:auto;
button{
    border:transparent;
    border-radius:20%;
    background-color:black;
    color:white;
    &:hover{
        cursor:pointer; 
        background-color:gold; 
        color:black; 
        transform: scale(1.2);
        transition: all 0.5s; 
    }
}
`
export const ConatinerFatherOfThePopUp = Styled.div`
display:flex;
`

export const DescriptionContainer = Styled.div`
margin-top:3vh;
margin-left:3vw;
color:white;

`