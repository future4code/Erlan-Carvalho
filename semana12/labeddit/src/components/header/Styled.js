import Styled from 'styled-components';


export const StyledHeader = Styled.header`
position:fixed;
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
border: solid black 1px;
background-color:orange;
button{
    background:none;
    border:none;
    &:hover{
        cursor:pointer;
        transform: scale(1.2);
        transition: all 0.5s;
    }

}

`