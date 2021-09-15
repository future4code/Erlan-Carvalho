import Styled from 'styled-components';

export const CardContainer = Styled.div`
display:grid;
justify-items:center;
align-items:center;
grid-template-columns:1fr 1fr 1fr 1fr ;
margin-right:5vw;
`
export const CardInButtonWay = Styled.button`
border:solid black 1px;
border-radius:10%;
background-color:white;
height:45vh; 
width:15vw;
margin-bottom:10vh;
margin-left:2vw;
background-image:linear-gradient(to bottom,white,silver,black);
&:hover{
    cursor:pointer;
    transform: scale(1.2);
        transition: all 0.2s; 
        margin-right:5vw;
        margin-left:8vw;
        margin-top:10vh;
        margin-bottom:15vh;
}
img{
    height:30vh;
    width:10vw;
}
h4{
    text-align:center;
}
`
export const StartAndShuffleButtonContainer= Styled.div`
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