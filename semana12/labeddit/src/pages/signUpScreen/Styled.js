import Styled from 'styled-components';

export const ContainerFather = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
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
export const ButtonsSection = Styled.div`
display:flex;
`