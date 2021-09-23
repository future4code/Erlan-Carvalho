import Styled from 'styled-components';

export const ContainerFather = Styled.div`
display: flex;
flex-direction: column;
h3{
    text-align:center;
}
img{
    margin-left:auto;
    margin-right:auto;
    height:60vh;
    width:40vw;
} 
`
export const ButtonToComeBack = Styled.button`
background:none;
border:none;
&:hover{
    cursor:pointer;
    transform: scale(1.3);
        transition: all 0.5s; 
}
`
export const ComeBack = Styled.h1`
color:black;
`