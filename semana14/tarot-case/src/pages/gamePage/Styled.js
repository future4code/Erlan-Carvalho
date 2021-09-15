import Styled from 'styled-components';

export const CardContainer = Styled.div`
display:grid;
justify-items:center;
align-items:center;
grid-template-columns:1fr 1fr 1fr 1fr ;
margin-right:5vw;
`
export const CardInButtonWay = Styled.button`
border:none;
background-color:white;
height:30vh; 
width:10vw;
margin-bottom:15vh;
margin-left:2vw;
&:hover{
    cursor:pointer;
    transform: scale(1.7);
        transition: all 0.5s; 
        margin-right:18vw;
        margin-left:8vw;
        margin-top:7vh;
        margin-bottom:30vh;
}
img{
    height:35vh;
    width:15vw;
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
        transform: scale(1.3);
        transition: all 0.5s; 
    }
}
`