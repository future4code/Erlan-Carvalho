import Styled from 'styled-components';

export const ContainerFather = Styled.div`
border-top:solid orange 8px ;
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
    width:31vw;
    height:7vh;
    margin-bottom:2vh;
    margin-right:2vw;
    background-color:orange;
    border:none;
    &:hover{
        cursor:pointer;
        transform: scale(1.1);
        transition: all 0.5s;
    }
}
`
export const SignUpForm = Styled.form`
display:grid;
grid-template-rows:1fr 1fr 1fr;
`