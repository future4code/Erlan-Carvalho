import Styled from 'styled-components';

export const CardContainer = Styled.div`
display:grid;
justify-items:center;
align-items:center;
grid-template-columns:1fr 1fr 1fr 1fr ;
`
export const CardInButtonWay = Styled.button`
border:solid black 1px;
height:30vh; 
width:10vw;
margin-bottom:15vh;
margin-left:2vw;
&:hover{
    cursor:pointer;
    transform: scale(2.2);
        transition: all 0.5s; 
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