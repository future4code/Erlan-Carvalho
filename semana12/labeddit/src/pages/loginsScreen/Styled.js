import Styled from 'styled-components';

export const ContainerFather = Styled.div`
border-top:solid orange 8px ;
display:grid;
grid-template-columns: 1fr 1fr;
`


export const StyledLoginMenu = Styled.div`
margin:20vh 10vw 0 13vw;
input{
    width:30vw;
    height:10vh;
    font-size:3.75vh;
    margin-bottom:2vh;
}
button{
    width:15vw;
    height:7vh;
    &:hover{
        cursor:pointer;
    }
}
`