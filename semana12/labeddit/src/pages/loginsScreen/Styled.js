import Styled from 'styled-components';

export const ContainerFather = Styled.div`
border-top:solid orange 8px ;
display:grid;
grid-template-columns: 1fr 1fr;
img{
    height:80vh;
    width:45vw;}
`
export const BrandAtLoginPage = Styled.h1`
margin-left:2vw;
color:orange;`


export const StyledLoginMenu = Styled.div`
margin:20vh 10vw 0 13vw;
input{
    width:30vw;
    height:10vh;
    font-size:3.75vh;
    margin-bottom:2vh;
}
button{
    width:31vw;
    height:7vh;
    font-size:relative;
    background-color:orange;
    margin-bottom:2vh;
    border:none;
    &:hover{
        cursor:pointer;
        transform: scale(1.1);
        transition: all 0.5s;
    }
}
h3{
    margin:1vh 0;
    margin-bottom:2vh;
    text-align:center;
    color:orange
}
`
