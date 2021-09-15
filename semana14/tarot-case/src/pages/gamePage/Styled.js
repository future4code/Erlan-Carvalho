import Styled from 'styled-components';

export const CardContainer = Styled.div`
display:grid;
justify-items:center;
align-items:center;
grid-template-columns:1fr 1fr 1fr 1fr ;
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
}
img{
    height:30vh;
    width:15vw;
}
`
export const StartButtonContainer= Styled.div`
height:8vh;
margin:5vh 0;
display:flex;
justify-content:center;
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